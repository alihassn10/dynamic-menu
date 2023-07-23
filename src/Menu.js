import React from 'react';

const Menu = ({ item }) => {
  return <section className='section-center'>
    {item.map((items) => {
      const { id, title,desc, img, price } = items;
      return <article className='menu-item'>
        <img src={img} alt={title} className='photo'></img>
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>{price}</h4>

          </header>
          <p className='item-text'>{desc}</p>
        </div>
      </article>
    })}

  </section>;
};

export default Menu;
