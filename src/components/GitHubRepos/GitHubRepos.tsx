import { useGitHub } from '../../hooks/useGitHub'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { GitHubRepoCard } from '../ProjectCard/ProjectCard'
import styles from './GitHubRepos.module.css'

export function GitHubRepos() {
  const { user, repos, loading, error, retry } = useGitHub()

  if (loading) {
    return (
      <div className={styles.stateWrapper}>
        <LoadingSpinner message="Cargando repositorios desde GitHub..." size="md" />
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.stateWrapper}>
        <ErrorMessage message={error} onRetry={retry} />
      </div>
    )
  }

  if (repos.length === 0) {
    return (
      <div className={styles.stateWrapper}>
        <p className={styles.empty}>No se encontraron repositorios públicos.</p>
      </div>
    )
  }

  return (
    <section aria-labelledby="github-repos-heading">
      {user && (
        <div className={styles.profile}>
          <img
            src={user.avatar_url}
            alt={`Avatar de ${user.login}`}
            className={styles.avatar}
            width={48}
            height={48}
          />
          <div className={styles.profileInfo}>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileName}
            >
              {user.name ?? user.login}
            </a>
            {user.bio && <p className={styles.profileBio}>{user.bio}</p>}
          </div>
          <ul className={styles.stats} aria-label="Estadísticas de GitHub">
            <li className={styles.statItem}>
              <span className={styles.statValue}>{user.public_repos}</span>
              <span className={styles.statLabel}>Repos</span>
            </li>
            <li className={styles.statItem}>
              <span className={styles.statValue}>{user.followers}</span>
              <span className={styles.statLabel}>Seguidores</span>
            </li>
          </ul>
        </div>
      )}

      <h2 id="github-repos-heading" className={styles.reposHeading}>
        Repositorios recientes
      </h2>

      <ul className={styles.grid} role="list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <GitHubRepoCard
              name={repo.name}
              description={repo.description}
              htmlUrl={repo.html_url}
              homepage={repo.homepage}
              language={repo.language}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              topics={repo.topics}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
