import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
            <li><Link to="/reviews" state={[
                { comment: "Excelente servicio", autor: "Juan", date: "2020-01-01" },
                { comment: "Muy buena aplicación", autor: "Pedro", date: "2020-01-02" },
                { comment: "Me encantó el lugar", autor: "Carlos", date: "2020-01-03" },
            ]}>Reviews</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/my-reviews">My Reviews</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;
