import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/cover.png'
import { AuthContext } from '../../../Context/AuthProvider';
import './Header.css';

const Header = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { })
    }


    const menuItems = <>
        <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md {({ isActive, isPending }) =>
        isActive ? "active" : ""}' to={'/'}>Home</NavLink></li>
        <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md' to={'/campaigns'}>Campaigns</NavLink></li>
        <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md' to={'/about'}>About</NavLink></li>
        <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md' to={'/faq'}>FAQ</NavLink></li>
        {
            user?.uid ? <li className='my-2 md:mt-0'><Link className='font-semibold text-md  bg-green-500'><button onClick={handleLogOut}>Logout</button></Link></li> : <li className='my-2 md:mt-0'><Link className='font-semibold bg-green-500 text-md px-6' to={'/login'}>login</Link></li>
        }
    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to={'/'} className=" normal-case text-xl w-40"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;