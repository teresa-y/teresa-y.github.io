import { NavLink } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function Navbar() {
    return (

        
        <div className = "navbar">
            
            <div className = "logo">
                <NavLink to='/' onClick={scrollToTop}>Teresa Yang</NavLink>
            </div>

            <div className = "navlinks-container">
                <NavLink to='/' className = "navlink-left" onClick={scrollToTop}>Work</NavLink>
                <NavLink to='/play' onClick={scrollToTop}>Play</NavLink>
                <NavLink to='/about' className = "navlink-right" onClick={scrollToTop}>About</NavLink>
            </div> 

        </div>
    );
    }
