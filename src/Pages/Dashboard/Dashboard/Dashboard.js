import React from 'react';
import useAdmin from '../../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import AdminLandingDashboard from './AdminLandingDashboard/AdminLandingDashboard';
import UserLandingDashboard from './UserLandingDashboard';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);

    if (isAdminLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                isAdmin ? <AdminLandingDashboard></AdminLandingDashboard> 
                        : <UserLandingDashboard></UserLandingDashboard>
            }
        </div>
    );
};

export default Dashboard;