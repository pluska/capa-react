import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <main>
            <h1>Profile</h1>
            <ul>
                <li><Link to={'/profile/settings'}>Settings</Link></li>
            </ul>
        </main>
    );
};

export default Profile;
