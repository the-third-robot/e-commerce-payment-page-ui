import React from "react"
import './Main.css'
import paypal from '../Images/paypal.png'
import visa from '../Images/visa.png'
import mastercard from '../Images/mastercard.png'
import maestro from '../Images/maestro.png'
import discover from '../Images/discover.png'
import ideal from '../Images/ideal.png'
import inpost from '../Images/inpost.png'
import dpd from '../Images/dpd.png'
import dhl from '../Images/dhl.png'
import fedex from '../Images/fedex.png'
import whiteTShirt from '../Images/white-t-shirt.jfif'
import blackTShirt from '../Images/black-t-shirt.jfif'
import {RiTruckLine} from 'react-icons/ri'

export default function Main(){

    return (
        <section id="main-items">
            <div className="left-items"> 
                <div className="left-items-buttons">
                    <button className="log-in">LOG IN</button>
                    
                    <button className="sign-up">SIGN UP</button>
                </div>

                <form className="left-items-form">
                    <p>Shipping Information</p>
                    <div className="form-items">
                        <div className="form-left">
                            <input type = "email" placeholder="Email"></input>
                            <input type = "text" placeholder="First Name"></input>
                            <input type = "text" placeholder="Last Name"></input>
                            <input type = "number" placeholder="Phone Number"></input>
                        </div>
                        <div className="form-right">
                            <input type = "text" placeholder="Address"></input>
                            <input type = "text" placeholder="City"></input>
                            <input type = "text" placeholder="Postal Code / ZIP"></input>
                            <select name = "country" id = "country">
                                <option value = "poland">Poland</option>
                                <option value = "india">India</option>
                                <option value = "USA">USA</option>
                                <option value = "uk">UK</option>
                            </select>
                            
                        </div>
                    </div>
                </form>
            </div>

            <div className="mid-items">
                
                <p>Payment Method</p>
                <div className="payment-buttons">
                        <button><img src = {paypal}  width="65%" /></button>
                        <button><img src = {visa} width="45%"/></button>
                        <button><img src = {mastercard} width="35%"/></button>
                </div>
                <div className="payment-buttons">
                        <button><img src = {maestro} width="35%"/></button>
                        <button><img src = {discover} width="60%" /></button>
                        <button><img src = {ideal} width="30%" /></button>
                </div>

                <div>
                    <p>Delivery Method</p>
                    <div className="delivery-buttons">
                        <button>
                            <div>
                                <img src = {inpost}  width="45%" />
                                <p>$20.00</p>
                            </div>
                        </button>
                        <button>
                            <div>
                                <img src = {dpd}  width="45%" />
                                <p>$12.00</p>
                            </div>
                        </button>
                    </div>
                    <div className="delivery-buttons">
                        <button>
                                <div>
                                    <img src = {dhl}  width="45%" />
                                    <p>$15.00</p>
                                </div>
                        </button>
                        <button>
                            <div>
                                <img src = {fedex}  width="45%" />
                                <p>$10.00</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div id="right-side-items">
                <div>
                    <p>Your Cart</p>
                    <div className ="item-details">  
                        <img src={whiteTShirt} width = "30%" className="item-image"/>
                        <div>
                            <p>T-Shirt<br></br>
                                Summer Vibes</p>
                            <p className="item-code">#261311</p>
                        </div>
                        <p>$89.99</p>
                    </div>
                    <div className="item-details">
                        <img src={blackTShirt} width = "30%" className="item-image" />
                        <div>
                            <p>Basic Slim<br></br>
                                Fit T-Shirt</p>
                            <p className="item-code">#212315</p>
                        </div>
                        <p>$69.99</p>
                    </div>
                    <div>
                        <button className="item-details">
                            <p className="item-code">Total Cost</p>
                            <p>$159,98</p>
                        </button>
                    </div>
                </div>
                <div className="bottom-right">
                    <RiTruckLine size = {25} className="icon" />
                    <p>You are <span>$30.02</span> away <br></br>from free shipping!</p>
                </div>
            </div>
        </section>
    )
}