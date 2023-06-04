'use client'

import styles from '../page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <p>Benf Restaurente</p>
        <span>Mesa do amigo</span>
      </div>
      <section className={styles.menus}>
        <div>
          Cerveja
        </div>
        <div>
          Japones
        </div>
      </section>
    </main>
  )
}
