import React from 'react';
import './App.css';
import Table from './components/Table';
// import Navbar from './components/Navbar';
import Hero from './components/Hero'

function App() {
  return (
    <>
    <div>
    <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDc0O3fcrVTpsTEMikVqUoY6ykCb3Bu66miw&usqp=CAU">
        <h1>Patterson Design Company</h1>
        <h2>Employee Directory</h2>
      </Hero>
    </div>
    <div>
        <Table />
    </div>
    </>
  );
}

export default App;
