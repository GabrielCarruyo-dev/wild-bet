import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import React from 'react';
import HeaderLong from './components/header';
import Animals from './components/animals-ratio';
function app() {
  return (
      <div>
        <HeaderLong />
        <BeakerIcon className="size-6 text-blue-500" />
        <Animals />
      </div>
  );
}
export default app;

