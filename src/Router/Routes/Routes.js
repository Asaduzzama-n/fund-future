import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/Main/DashboardLayout';
import Main from '../../Layout/Main/Main';
import About from '../../Pages/About/About/About';
import CampaignAndDonation from '../../Pages/CampaignAndDonation/CampaignAndDonation';
import Campaigns from '../../Pages/Campaigns/Campaigns/Campaigns';
import CreateCampaigns from '../../Pages/CreateCampaign/CreateCampaigns/CreateCampaigns';
import CreateStory from '../../Pages/Dashboard/CreateStory/CreateStory';
import MyCampaignView from '../../Pages/Dashboard/MyCampaign/MyCampaignView/MyCampaignView';
import MyCampaign from '../../Pages/Dashboard/MyCampaign/MyCampaign';
import MyDonation from '../../Pages/Dashboard/MyDonation/MyDonation';
import MyProfile from '../../Pages/Dashboard/MyProfile/MyProfile';
import MySuccessStory from '../../Pages/Dashboard/MySuccessStory/MySuccessStory';
import Donation from '../../Pages/Donation/Donation';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Signup from '../../Pages/Signup/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import ReportDetails from '../../Pages/Dashboard/MyCampaign/MyCampaignView/ViewPart/ReportDetails/ReportDetails';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';
import ViewStory from '../../Pages/Home/SuccessStory/ViewStory';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                
            },
            {
                path:'/successStory/:_id',
                element:<ViewStory></ViewStory>,
                loader: ({params}) => fetch(`http://localhost:5000/successStory/${params._id}`)
                
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/dashboard/my-campaign',
                element:<MyCampaign></MyCampaign>
            },
            {
                path: '/dashboard/profile',
                element:<MyProfile></MyProfile>
            },
            {
                path: '/dashboard/my-donation',
                element:<MyDonation></MyDonation>
            },
            {
                path: '/dashboard/success-story',
                element:<MySuccessStory></MySuccessStory>
            },
            {
                path: '/dashboard/create-story',
                element:<CreateStory></CreateStory>
            },
            {
                path: '/dashboard/campaign-view/:_id',
                element:<MyCampaignView></MyCampaignView>,
                loader: ({params})=> fetch(`http://localhost:5000/campaign/${params._id}`)
            },
            {
                path: '/dashboard/report',
                element:<ReportDetails></ReportDetails>
            },
        ]
    }

])

export default routes;