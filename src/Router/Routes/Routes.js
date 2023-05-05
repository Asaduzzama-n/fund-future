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
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Signup from '../../Pages/Signup/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';
import ViewStory from '../../Pages/Home/SuccessStory/ViewSuccessStory/ViewStory';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import CharityDetails from '../../Pages/Home/Charity/CharityDetails';
import NotFound from '../../Pages/NotFound/NotFound';
import CampaignRequest from '../../Pages/Dashboard/AdminDashboard/Campaign/CampaignRequest/CampaignRequest';
import AdminRoute from './AdminRoute';
import ManageCampaign from '../../Pages/Dashboard/AdminDashboard/Campaign/ManageCampaign/ManageCampaign';
import ManageDonation from '../../Pages/Dashboard/AdminDashboard/Donation/ManageDonation/ManageDonation';
import CampaignView from '../../Pages/Dashboard/AdminDashboard/Campaign/CampaignView/CampaignView';
import ManageWithdraw from '../../Pages/Dashboard/AdminDashboard/ManageWithdraw/ManageWithdraw';
import ManageCharity from '../../Pages/Dashboard/AdminDashboard/ManageCharity/ManageCharity';
import Faq from '../../Pages/Faq/Faq/Faq';
import TermsAndCondition from '../../Pages/TermsAnCondition/TermsAndCondition';
import Contact from '../../Pages/Contact/Contact';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/t&c',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/start-campaign',
                element: <PrivateRoute><CreateCampaigns></CreateCampaigns></PrivateRoute>
            },
            {
                path: '/campaigns',
                element: <Campaigns></Campaigns>
            },
            {
                path: '/campaign/:_id',
                element: <CampaignAndDonation></CampaignAndDonation>,
                loader: ({ params }) => fetch(`https://fund-future-server.vercel.app/campaign/${params._id}`)
            },
            {
                path: '/create-campaign',
                element: <PrivateRoute><CreateCampaigns></CreateCampaigns></PrivateRoute>
            },
            {
                path: '/successStory/:_id',
                element: <ViewStory></ViewStory>,
                loader: ({ params }) => fetch(`https://fund-future-server.vercel.app/successStory/${params._id}`)

            },
            {
                path: '/charity/:_id',
                element: <CharityDetails></CharityDetails>,
                loader: ({ params }) => fetch(`https://fund-future-server.vercel.app/charity/${params._id}`)

            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my-campaign',
                element: <MyCampaign></MyCampaign>
            },
            {
                path: '/dashboard/profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/my-donation',
                element: <MyDonation></MyDonation>
            },
            {
                path: '/dashboard/success-stories',
                element: <MySuccessStory></MySuccessStory>
            },
            {
                path: '/dashboard/create-story',
                element: <CreateStory></CreateStory>
            },
            {
                path: '/dashboard/my-campaign/campaign-view/:_id',
                element: <MyCampaignView></MyCampaignView>,
                loader: ({ params }) => fetch(`https://fund-future-server.vercel.app/campaign/${params._id}`)
            },
            {
                path: '/dashboard/campaign-request',
                element: <AdminRoute><CampaignRequest></CampaignRequest></AdminRoute>
            },
            {
                path: '/dashboard/manage-campaign',
                element: <AdminRoute><ManageCampaign></ManageCampaign> </AdminRoute>
            },
            {
                path: '/dashboard/manage-campaign/campaign-view/:_id',
                element: <AdminRoute><CampaignView></CampaignView> </AdminRoute>,
                loader: ({ params }) => fetch(`https://fund-future-server.vercel.app/campaign/${params._id}`)

            },
            {
                path: '/dashboard/manage-donation',
                element: <AdminRoute><ManageDonation></ManageDonation> </AdminRoute>
            },
            {
                path: '/dashboard/manage-charity',
                element: <AdminRoute><ManageCharity></ManageCharity></AdminRoute>
            },
            {
                path: '/dashboard/manage-withdraw',
                element: <AdminRoute><ManageWithdraw></ManageWithdraw> </AdminRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
            
        ]
    }

])

export default routes;