import React from "react";
import logo from './Other 03.png';
import bitcoin from './bitcoin.svg';
import computerFront from './computerFront.svg';

import './styles.css';

const CardBitcoin = () => {


  return (
    <>
     <div className="cardContainer">
<div className="purpBox">
Buy and sell Bitcoin
</div>
<p className="textQuick" >Quick. Simple. Secure</p>
<div className="container">
<a className="textBTC">BTC</a>
<img src={bitcoin} alt="bitcoin" />
</div>
<p className="price">48900,49 &#8364;</p>
<button className="ButtonPrice">Bitcoin price</button>
     </div>
   
    

<img className="computer" src={logo} alt="computer" />
<img className="computerFront" src={computerFront} alt="computerFront" />
    </>
  );
};

export default CardBitcoin;