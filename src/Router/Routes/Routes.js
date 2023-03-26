import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import About from '../../Pages/About/About/About';
import CampaignAndDonation from '../../Pages/CampaignAndDonation/CampaignAndDonation';
import Campaigns from '../../Pages/Campaigns/Campaigns/Campaigns';
import CreateCampaigns from '../../Pages/CreateCampaign/CreateCampaigns/CreateCampaigns';
import Donation from '../../Pages/Donation/Donation';
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
                path:'/start-campaign',
                element:<PrivateRoute><CreateCampaigns></CreateCampaigns></PrivateRoute>
            },
            {
                path:'/campaigns',
                element:<Campaigns></Campaigns>
            },
            {
                path:'/campaign/:_id',
                element:<CampaignAndDonation></CampaignAndDonation>,
                loader: ({params}) => fetch(`http://localhost:5000/campaign/${params._id}`)
            },
            {
                path:'/create-campaign',
                element:<PrivateRoute><CreateCampaigns></CreateCampaigns></PrivateRoute>
            },
            {
                path:'/donation/:_id',
                element:<PrivateRoute><Donation></Donation></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/campaign/${params._id}`)
                
            }
        ]
    }

])

export default routes;