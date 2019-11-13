import React, {useState} from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

   const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const login = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/FriendsList');
            })
            .catch(err => console.log(err.response));
    };

    if (localStorage.getItem('token')) {
        return <Redirect to="/protected" />;
    }

    return (
        <div>
            <form onSubmit={login}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;