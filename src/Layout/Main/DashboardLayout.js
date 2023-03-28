import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile fixed">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content lg:w-full ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-md">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='border-l-4  border-green-500 my-2 font-medium'><NavLink to={'/dashboard/my-campaign'} exact activeClassName="active" >My Campaign</NavLink></li>
                        <li className='border-l-4 border-green-500 my-2 font-medium'><NavLink to={'/dashboard/profile'} activeClassName="active">My Profile</NavLink></li>
                        <li className='border-l-4 border-green-500 my-2 font-medium'><NavLink to={'/dashboard/my-donation'} activeClassName="active">My Donation</NavLink></li>
                        <li className='border-l-4 border-green-500 my-2 font-medium'><NavLink to={'/dashboard/success-story'} activeClassName="active">My success story</NavLink></li>
                        <li className='border-l-4 border-green-500 my-2 font-medium'><NavLink to={'/dashboard/create-story'} activeClassName="active">Create success story</NavLink></li>
                    </ul>

                </div>
                
            </div>
        </div>
    );
};

export default DashboardLayout;