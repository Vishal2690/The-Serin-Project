import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../AllCssFile/RouterFolder.css'
import nav from '../Assets/NavBar.png'

const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);


    const openMenuFun = () => {
        setMenuOpen(!MenuOpen);
    };
    return (
        <div className='TheMain'>
            <div className='fix'>
                <div className='main'>
                    <div id='the'>The</div>
                    <h1 className='heading'>Serin</h1>
                </div>
                <div className='threeLines' onClick={openMenuFun}>
                    <img src={nav} alt="" />
                </div>
            </div>
            <div className={'Navbar' + (MenuOpen ? ' open' : '')}>
                <NavLink
                    style={({ isActive }) => { return isActive ? { color: "blue", textDecoration: "none" } : { color: "red", textDecoration: "none" } }}
                    to="/">Home</NavLink>
                <NavLink
                    style={({ isActive }) => { return isActive ? { color: "blue", textDecoration: "none" } : { color: "red", textDecoration: "none" } }}
                    to="/bollywood">Bollywood</NavLink>
                <NavLink
                    style={({ isActive }) => { return isActive ? { color: "blue", textDecoration: "none" } : { color: "red", textDecoration: "none" } }}
                    to="/technology">Technology</NavLink>
                <NavLink
                    style={({ isActive }) => { return isActive ? { color: "blue", textDecoration: "none" } : { color: "red", textDecoration: "none" } }}
                    to="/hollywood">Hollywood</NavLink>
                <NavLink
                    style={({ isActive }) => { return isActive ? { color: "blue", textDecoration: "none" } : { color: "red", textDecoration: "none" } }}
                    to="/fitness">Fitness</NavLink>
                <NavLink
                    style={({ isActive }) => { return isActive ? { color: "blue", textDecoration: "none" } : { color: "red", textDecoration: "none" } }}
                    to="/food">Food</NavLink>
            </div>

        </div>
    )
}

export default Navbar

