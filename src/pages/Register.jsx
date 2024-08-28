import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions'; // Adjust the path as necessary
import { addUser } from '../utils/registerInJson'; // Adjust the path as necessary

const Register = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = { name, age, country, password };
        
        // Dispatch the register action
        dispatch(register(newUser));
        
        // Call the function to add the user to the JSON file
        await addUser(newUser);
        
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/', {
            state: newUser
        });
    };

    return (
    <>
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
    </>
    );
};

export default Register;
