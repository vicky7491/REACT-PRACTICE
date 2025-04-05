
import React from 'react';

import Person from './components/Person';
import Product from './components/Product';
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import InlineStyle from './components/inlineStyle';
import StyleCard from './components/StyleCard';

const App = () => {
  return (
  
       <div>
        <Person name="Vicky" age={22} />
        <Product name="iPhone" price={86000} /> 


        <Weather/>
        <UserStatus  loggedIn={true} isAdmin={true}/>
        <InlineStyle/>
        <StyleCard/>
      </div> 
      
       
  );
};

export default App;
