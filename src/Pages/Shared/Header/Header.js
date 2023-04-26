import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/cover.png'
import { AuthContext } from '../../../Context/AuthProvider';
import './Header.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import tEn from '../../../Locales/en/translation.json';
import tBn from '../../../Locales/bn/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({

    resources: {
      en: {
        translation: tEn
      },
      de: {
        translation: tBn
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });




const Header = () => {

  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => { })
  }

  const changeLang = (l) => {
    return () => {
      i18n.changeLanguage(l);
      localStorage.setItem('lang', l);

    }
  }


  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  }, [])

  const { t } = useTranslation();


  const menuItems = <>
    <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md {({ isActive, isPending }) =>
        isActive ? "active" : ""}' to={'/'}>{t("nav_home")}</NavLink></li>
    <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md {({ isActive, isPending }) =>
        isActive ? "active" : ""}' to={'/campaigns'}>{t("nav_campaigns")}</NavLink></li>
    {user?.uid && <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md {({ isActive, isPending }) =>
        isActive ? "active" : ""}' to={'/dashboard'}>{t("nav_dashboard")}</NavLink></li>}
    <li className='my-2 md:mt-0'><NavLink className='font-semibold mx-2 text-md {({ isActive, isPending }) =>
        isActive ? "active" : ""}' to={'/start-campaign'}>{t("nav_startcamp")}</NavLink></li>
    {
      user?.uid ? <li className='my-2 md:mt-0'><Link className='font-semibold text-md  bg-green-500'><button onClick={handleLogOut}>{t("nav_logout")}</button></Link></li> : <li className='my-2 md:mt-0'><Link className='font-semibold bg-green-500 text-md px-6' to={'/login'}>{t("nav_signin")}</Link></li>
    }
    <div className="dropdown dropdown-hover bg-white">
      <label tabIndex={0} className="btn bg-white border-none ml-4 my-auto m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 bg-white w-52">
        <li className='my-2'><button onClick={changeLang('en')}>English</button></li>
        <li><button onClick={changeLang('de')}>Bangla</button></li>
      </ul>
    </div>
  </>

  return (
    <div className='sticky top-0 bg-white z-20'>

      <div className="navbar justify-between">
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
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Header;