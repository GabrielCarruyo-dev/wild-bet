import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import React from 'react';
import HeaderLong from './components/header';
import Animals from './components/animals-ratio';
function app() {
  const animals = ["lion", "dog", "dolphin", "hippopotamu", "kangaroo", "cat", "owl", "rabbit", "seahorse", "shark", "swan", "toucan", "whale",];
  const listItems = animals.map((animal, i) =>
    <Animals name={animal} num={i+1}/>
  );

  return (
      <div>
        <HeaderLong />
        {listItems}
      </div>
  );
}
export default app;

