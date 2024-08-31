import { NavLink } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function Navbar() {
    return (

        
        <div className = "navbar">
            
            <div className = "logo">
                <NavLink to='/' onClick={scrollToTop}>teresa yang</NavLink>
            </div>

            <div className = "navlinks-container">
                <NavLink to='/' className = "navlink-left" onClick={scrollToTop}>work</NavLink>
                <NavLink to='/play' onClick={scrollToTop}>play</NavLink>
                <NavLink to='/about' className = "navlink-right" onClick={scrollToTop}>about</NavLink>
            </div> 

        </div>
    );
    }
