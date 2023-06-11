import Category from '../components/category'
import styles from '../page.module.scss'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <p>Benfica Restaurante</p>
        <p>Mesa do Benfica</p>
      </div>
      <Category />
    </main >
  )
}
