import React, {Component, Fragment} from 'react';
import img_1 from '../assets/images/img_1.png';
import img_2 from '../assets/images/img_2.png';
import img_3 from '../assets/images/img_3.png';
import master from '../assets/images/master.png';
import visa from '../assets/images/visa.png';

import './Footer.scss'

export default class Footer extends Component{
    render() {
        return (
            <Fragment>
                <main>
                    <section className={"why"}>
                        <div className={"container"}>

                        </div>
                    </section>
                    <section className={"features"}>
                        <div className={"container"}>
                            <h3 className={"features__title"}>Unique features</h3>
                            <div className={"features__wrapper"}>
                                <div className={"features__item"}>
                                    <img src={img_3} alt=""/>
                                        <h6 className={"features__subtitle"}>OTC</h6>
                                        <p className={"feature__description"}>
                                            Personal manager for OTC deals will assist with
                                            efficient deal
                                        </p>
                                </div>
                                <div className={"features__item"}>
                                    <img src={img_2} alt=""/>
                                        <h6 className={"features__subtitle"}>Cryptoinvwstments</h6>
                                        <p className={"feature__description"}>Allow our business angels to invest crypto funds
                                            to your unique startup ideas</p>
                                </div>
                                <div className={"features__item"}>
                                    <img src={img_1} alt=""/>
                                        <h6 className={"features__subtitle"}>Crypto lending</h6>
                                        <p className={"feature__description"}>Take the opportunity to get a loan in the most
                                            common cryptocurrencies in the world</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className={"footer"}>
                    <div className={"container"}>
                        <div className={"footer__cards"}>
                            <img src={master} alt=""/>
                            <img src={visa} alt=""/>
                        </div>
                        <nav className={"footer__nav"}>
                            <ul className={"footer__list"}>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">Contact us</a>
                                </li>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">Terms of service</a>
                                </li>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">Terms of service</a>
                                </li>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">AML policy</a>
                                </li>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">Complaint</a>
                                </li>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">Complaint</a>
                                </li>
                                <li className={"footer__item"}>
                                    <a className={"footer__link"} href="#">Risk</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </Fragment>

        )
    }
}