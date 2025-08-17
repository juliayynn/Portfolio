import React from 'react';
import { Link } from 'react-scroll';

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo">Портфолио</h1>
            <div className="nav-container px-5">
                
                <ul className="nav-links px-4">
                    <li>
                        <Link
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='navLink'
                            activeClass="active"
                            
                        >Обо мне</Link>
                    </li>
                    <li>      
                        <Link
                            to='Skills'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='navLink'
                            activeClass='active'
                        >Навыки</Link>
                    </li>      
                    <li>
                        <Link
                            to='Projects'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='navLink'
                            activeClass='active'
                        >Проекты</Link>
                    </li>
                    <li>    
                        <Link
                            to='Contact'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='navLink'
                            activeClass='active'
                        >Контакты</Link>
                    </li> 
                </ul> 
                <a href="/resume.pdf" download className="download-btn">Скачать резюме</a>
            </div>
        </nav>
    );
}

export default Navbar;