import React from "react"
import './Text.css'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {RiTruckLine} from 'react-icons/ri'
import {MdHorizontalRule} from 'react-icons/md'

export default function Text(){

    return(
        <section id ="text-items">
            <div className="text">
                <p>Shipping and Payment</p>
            </div>
            <div className="text-icons">
                <RiTruckLine size = {18}  id = "icon-1" /> 
                <MdOutlineShoppingCart className="icon"  size={18}/>
            </div>  
                
        </section>
    )
}