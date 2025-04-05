
import React from 'react';
import { useState } from 'react';
import Person from './components/Person';
import Product from './components/Product';
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import InlineStyle from './components/inlineStyle';
import StyleCard from './components/StyleCard';
import StateHooks from './components/useState/stateHooks';
import MainComponent from './components/useState/mainComponent';
import TodoList from './components/useState/TodoList';


const App = () => {

  return (
  
       <div>
        <Person name="Vicky" age={22} />
        <Product name="iPhone" price={86000} /> 


        <Weather/>
        <UserStatus  loggedIn={true} isAdmin={true}/>
        <InlineStyle/>
        <StyleCard/>
        <StateHooks/>
        <MainComponent/>
        <TodoList/>
       
       
      </div> 
      
       
  );
};

export default App;
