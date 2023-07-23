import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
function App() {
  const [item, setItem] = useState(items);
  const [categories, setCategories] = useState([]);
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  const filterItems = (category) => {
    if (category === 'all') {
      setItem(items)
      return;
    }
    const newItems = items.filter((item) => item.category == category);
    setItem(newItems)

  }
  return <main>
    <section className='title'>
      <h2>Our menu</h2>
      <div className='underline'></div>
      <Categories categories={allCategories} filterItems={filterItems} />
      <Menu item={item} />
    </section>
  </main>;
}

export default App;
