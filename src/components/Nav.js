import React from "react"
import './Nav.css'
import image from '../Images/top right icon.PNG'
import { FaSearch } from 'react-icons/fa';
import {MdOutlineShoppingCart} from 'react-icons/md'
import {VscAccount} from 'react-icons/vsc'


export default function Nav(){

    return(
        <section id="nav">
            <div className="nav-logo">
                <img src= {image} alt="Icon-1"/>
                <p><span>E-</span>Shop</p>
            </div>
            <div className="nav-center">
                <ul>
                
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
            </div>
            <div className="nav-corner-logos">
                <ul>
                    <li><FaSearch size={24}/></li>
                    <li><MdOutlineShoppingCart size={24}/></li>
                    <li><VscAccount size={24}/></li>
                </ul>
            </div>
        </section>
    )
}