
import React from 'react';




import Person from './components/Person';
import Product from './components/Product';

const App = () => {
  return (
   
      <div>
        <Person name="Vicky" age={22} />
        <Product name="iPhone" price={86000} /> {/* Ensure Product accepts these props */}
      </div>
   
  );
};

export default App;
