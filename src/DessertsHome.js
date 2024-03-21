import React from 'react'
import ItemCard from './Itemcard';
import DesseertsData from './DessertsData';

const DessertsHome = () => {
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {DesseertsData.productdata.map((item) => (
            <ItemCard
              key={item.id} 
              id={item.id} 
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DessertsHome;