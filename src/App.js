import React from 'react';


import './App.css';
import Header from './components/Header/Header';
import CardBitcoin from './components/CardBitcoin/CardBitcoin';
import PartTree from './components/PartTree/parttree';
import Footer from "./components/Footer/Footer";
import MainInfoView from './components/MainInfoView/MainInfoView'

function App() {
  return (
    <div className="App">
      <Header />
    <CardBitcoin />
    <MainInfoView />
        <PartTree />
      <Footer/>
    </div>
  );
}

export default App;
