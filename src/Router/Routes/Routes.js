import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import About from '../../Pages/About/About/About';
import Campaigns from '../../Pages/Campaigns/Campaigns/Campaigns';
import CreateCampaigns from '../../Pages/CreateCampaign/CreateCampaigns/CreateCampaigns';
import Faq from '../../Pages/Faq/Faq/Faq';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Signup from '../../Pages/Signup/Signup/Signup';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/campaigns',
                element:<Campaigns></Campaigns>
            },
            {
                path:'/create-campaign',
                element:<PrivateRoute><CreateCampaigns></CreateCampaigns></PrivateRoute>
            }
        ]
    }

])

export default routes;