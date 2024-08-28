import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        navigate('/profile', { state: formData });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <>
            <h1>Profile Settings</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} />
                <br />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" onChange={handleChange} />
                <br />
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" onChange={handleChange} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} />
                <br />
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default ProfileSettings;
