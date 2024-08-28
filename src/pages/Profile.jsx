import { Link, useLocation } from 'react-router-dom';

const Profile = () => {
    const { state } = useLocation();
    return (
        <>
            <h1>Profile</h1>
            <p>Logged in as: {state?.name}</p>
            <p>Age: {state?.age}</p>
            <p>Country: {state?.country}</p>
            <p>Password: {state?.password}</p>
            <ul>
                <li><Link to={'/profile/settings'} state={state}>Settings</Link></li>
            </ul>
        </>
    );
};

export default Profile;
