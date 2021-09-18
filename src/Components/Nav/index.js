import React from 'react';



function Nav(){






    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="navbar-brand">
                <a  href="/"> Home </a>
                <ul>
                    <li><a className="nav-link" href="#about">About </a></li>
                    <li><a className="nav-link" href="#projects"> Projects </a></li>
                    <li><a className="nav-link" href="#contact"> Contact </a></li>
                </ul>
            
            </nav>

        </header>
    )
}

export default Nav;