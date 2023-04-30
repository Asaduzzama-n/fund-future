import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';
import layers from '../../assets/gifIcon/layers.gif'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    if (isAdminLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <div className="drawer  drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-white  w-56">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {
                        isAdmin ?
                            <ul className="menu  p-4 w-80  text-base-content">
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/campaign-request'} activeClassName="active">Campaign Request</NavLink></li>
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/manage-campaign'} activeClassName="active">Manage Campaign</NavLink></li>
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/manage-donation'} activeClassName="active">Manage Donation</NavLink></li>
                                {/* <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/manage-charity'} activeClassName="active">Manage Charity</NavLink></li> */}
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/manage-withdraw'} activeClassName="active">Withdrawal Request</NavLink></li>

                            </ul>
                            :
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                <li className='border-l-4  border-primary  my-2 font-medium'><NavLink to={'/dashboard/my-campaign'} exact activeClassName="active" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                </svg>

                                    My Campaign</NavLink></li>
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/profile'} activeClassName="active"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                                    My Profile</NavLink></li>
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/my-donation'} activeClassName="active"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                    My Donation</NavLink></li>
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/success-stories'} activeClassName="active"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                </svg>
                                    My success story</NavLink></li>
                                <li className='border-l-4 border-primary my-2 font-medium'><NavLink to={'/dashboard/create-story'} activeClassName="active"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    Create success story</NavLink></li>
                            </ul>
                    }

                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;