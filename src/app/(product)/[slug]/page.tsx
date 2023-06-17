import React from 'react';
import Category from '../../components/category';

export default function Home() {
  return (
    <main>
      <div className="flex justify-between">
        <p>Restaurante</p>
        <p>Mesa 15</p>
      </div>
      <Category />
    </main>
  );
}
