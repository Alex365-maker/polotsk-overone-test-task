import React from "react";
import logo from './logo.svg';
import './styles.css';

const Header = () => {


  return (
    <>
    <header>
        
    <img className="logo" src={logo} alt="logo" />
    <div className="containerButton">
    <button className="singIn">Sign in</button>
    <button className="createAccount">Create account</button>
    </div>
    </header>
    
    </>
  );
};

export default Header;