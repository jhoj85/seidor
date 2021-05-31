import React, {useEffect, useState} from 'react';
import logo from '../img/logo-cademi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Menu = () => {
    const [visible, setVisible]=useState(false)
    const [name,setName]=useState('')

useEffect(()=>{
    resize()
},[])

 const resize = ()=>{
     const btn_menu = document.querySelector('.btn_menu')
     if (btn_menu){
         btn_menu.addEventListener('click', ()=> {
             const menu_items = document.querySelector('.menu_items')
             menu_items.classList.toggle('show')
         })
     }
 }

 const show = (e)=>{
    let dato = e.target.name
    switch (dato) {
        case 'About':
        setName('About')
            break;

         case 'Programs':
        setName('Programs')
            break;

        case 'Campus':
        setName('Campus')
            break;
    
        default:
            setName('')
            break;
    }
     console.log(e.target.name)  
 }

    return (
        <div>
            <nav className="menu">
              <div className="cont_logo" > <img className="img" src={logo} alt="" /></div>
            <ul className="menu_items">
                  
                    <li >
                        <Link className="subMenu_btn" onClick={show} name="About" to="/about">About</Link>
                        <ul className={name === 'About' ? 'visible': 'no-visible'}>
                            <SubMenu name={name} key={name}/>
                        </ul>
                    </li>
                    <li >
                        <Link className="subMenu_btn" onClick={show} name="Programs" to="/programs">Programs</Link>
                        <ul className={name === 'Programs' ? 'visible': 'no-visible'}>
                            <SubMenu name={name} key={name}/>
                        </ul>
                    </li>
                    <li >
                        <Link className="subMenu_btn" onClick={show} name="Campus" to="/campus">Campus</Link>
                        <ul className={name === 'Campus' ? 'visible': 'no-visible'}>
                            <SubMenu name={name} key={name}/>
                        </ul>
                    </li>
                    <li >
                        <Link className="subMenu_btn" onClick={show} to="/student">Student life</Link>
                        <ul className={name === 'Student life' ? 'visible': 'no-visible'}>
                            <SubMenu name={name} key={name}/>
                        </ul>
                    </li>
                    <li >
                        <Link className="subMenu_btn" onClick={show} to="/admissions">Admissions</Link>
                        <ul className={visible ? 'visible': 'no-visible'}>
                            {/* <SubMenu /> */}
                        </ul>
                    </li>
                    <li >
                        <Link className="subMenu_btn" onClick={show} to="/news">News & events</Link>
                        <ul className={visible ? 'visible': 'no-visible'}>
                            {/* <SubMenu /> */}
                        </ul>
                    </li>
                    <li >
                        <Link className="subMenu_btn" onClick={show} to="/alumni">Alumni</Link>
                        <ul className={visible ? 'visible': 'no-visible'}>
                            {/* <SubMenu /> */}
                        </ul>
                    </li>
                   
              <div className="container_btn">
            <button className="btn_cont">Contact </button >
            <button className="btn">Apply now</button>
            </div>
            </ul>
            
            <span className="btn_menu">
             <FontAwesomeIcon icon={faBars} />
            </span>
          </nav>
            
        </div>
    );
}

export default Menu;
