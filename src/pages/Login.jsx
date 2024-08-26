import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = useLocation().state?.redirect;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        localStorage.setItem('isAuthenticated', 'true');

        if (redirect) {
            navigate(redirect);
        } else {
            navigate('/');
        }
    };

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit">Iniciar sesión</button>
            </form>
        </main>
    );
};

export default Login;
