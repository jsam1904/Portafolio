import { useCallback, useEffect, useState } from 'react'
import type { GitHubRepo, GitHubUser } from '../types/github'

interface UseGitHubReturn {
  user: GitHubUser | null
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
  retry: () => void
}

const BASE_URL =
  (import.meta.env.VITE_GITHUB_API_URL as string | undefined) ??
  'https://api.github.com'

const USERNAME =
  (import.meta.env.VITE_GITHUB_USERNAME as string | undefined) ?? 'jsam1904'

export function useGitHub(): UseGitHubReturn {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)

  const retry = useCallback(() => {
    setAttempt((n) => n + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`${BASE_URL}/users/${USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(
            `${BASE_URL}/users/${USERNAME}/repos?sort=updated&per_page=6&type=owner`,
            { signal: controller.signal }
          ),
        ])

        if (!userRes.ok) {
          throw new Error(
            `No se pudo cargar el perfil de GitHub (${userRes.status})`
          )
        }
        if (!reposRes.ok) {
          throw new Error(
            `No se pudieron cargar los repositorios (${reposRes.status})`
          )
        }

        const [userData, reposData]: [GitHubUser, GitHubRepo[]] =
          await Promise.all([userRes.json(), reposRes.json()])

        setUser(userData)
        setRepos(reposData.filter((r) => !r.fork))
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(
          err instanceof Error
            ? err.message
            : 'Error inesperado al conectarse con la API de GitHub'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    return () => controller.abort()
  }, [attempt])

  return { user, repos, loading, error, retry }
}
