import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Age: ${age}, Country: ${country}, Password: ${password}`);
        navigate('/', {
            state: {
                name,
                age,
                country,
                password
            }
        }); // Redirect to home after submission
    };

    return (
    <main>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label htmlFor="age">Edad:</label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <br />
            <label htmlFor="country">País:</label>
            <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />
            <button type="submit">Registrarse</button>
        </form>
    </main>
    );
};

export default Register;
