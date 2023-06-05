'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import Iitem from '@/types/item'

export default function Category() {
  const [openCategoryId, setOpenCategoryId] = useState(0);

  const open = (categoryId: number) => {
    setOpenCategoryId(categoryId)
  }

  const [categories, setCategories] = useState<Iitem[]>([
    { id: 1, name: 'cervejas', items: [{ id: 1, name: 'cerveja1', description: 'cerveja boa' }, { id: 1, name: 'cerveja1', description: 'cerveja boa' }] },
    { id: 2, name: 'prato', items: [{ id: 1, name: 'cerveja1', description: 'cervejo boa' }] },
    { id: 3, name: 'prato do dia', items: [{ id: 1, name: 'cerveja1', description: 'cervejo boa' }] },
  ])


  return (
    <>
      <section className={styles.category}>
        {categories.map((categorie) => (
          <div onClick={() => open(categorie.id)} key={categorie.id}>
            <p>{categorie.name}</p>
            {openCategoryId === categorie.id && categorie.items.map((item) => (
              <div className={styles.descriptionItem} key={item.id}>
                <div>
                  IMAGEM
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  )
}
