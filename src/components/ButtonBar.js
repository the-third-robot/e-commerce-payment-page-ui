import React from "react"
import './ButtonBar.css'
import {BiArrowBack} from 'react-icons/bi'

export default function ButtonBar (){

    return (
        <section id="bottom-bar">
            <div className="back-click">
                <BiArrowBack />
                <p>Back</p>
            </div>
            <div className="payment-buttons">
                <button>CONTINUE SHOPPING</button>
                <button>PROCEED TO PAYMENT</button>
            </div>
        </section>
    )
}