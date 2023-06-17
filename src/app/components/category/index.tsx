'use client';

import React from 'react';
import { useState } from 'react';
import Iitem from '@/types/item';

export default function Category() {
  const [openCategoryId, setOpenCategoryId] = useState(0);

  const open = (categoryId: number) => {
    setOpenCategoryId((prevCategoryId) =>
      prevCategoryId === categoryId ? 0 : categoryId
    );
  };

  const [categories, setCategories] = useState<Iitem[]>([
    {
      id: 1,
      name: 'cervejas',
      items: [
        { id: 1, name: 'cerveja 1', description: 'cerveja boa' },
        { id: 1, name: 'cerveja 1', description: 'cerveja boa' },
      ],
    },
    {
      id: 2,
      name: 'prato',
      items: [{ id: 1, name: 'cerveja 1', description: 'cerveja boa' }],
    },
    {
      id: 3,
      name: 'prato do dia',
      items: [{ id: 1, name: 'cerveja 1', description: 'cerveja boa' }],
    },
  ]);

  return (
    <>
      <section>
        {categories.map((categorie) => (
          <div onClick={() => open(categorie.id)} key={categorie.id}>
            <p>{categorie.name}</p>
            {openCategoryId === categorie.id &&
              categorie.items.map((item) => (
                <div className="flex" key={item.id}>
                  <div>IMAGEM</div>
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
  );
}
