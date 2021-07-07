import React, { useState, useEffect } from 'react';

//Imported Components
import { axiosWithAuth } from '../utilities/axiosWithAuth';


const FriendsList = () => {

    const [friends, setFriends] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err.response));
    });

    const addFriend = () => {
        const newFriend = {
            id: '',
            name: '',
            age: '',
            email: ''
        }

        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                setFriends(...friends, newFriend);
            })
            .catch(err => console.log(err.response));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFriends({ ...friends, [name]: value });
    };

    return (
        <div>
            <form onSubmit={addFriend}>
                <label htmlFor="id">Friend ID:</label>
                <input
                    type="text"
                    name="id"
                    value={friends.id}
                    onChange={handleChange}
                />
                <label htmlFor="name">Friend Name:</label>
                <input
                    type="text"
                    name="name"
                    value={friends.name}
                    onChange={handleChange}
                />
                <label htmlFor="age">Friend Age:</label>
                <input
                    type="text"
                    name="age"
                    value={friends.age}
                    onChange={handleChange}
                />
                <label htmlFor="email">Friend E-Mail:</label>
                <input
                    type="email"
                    name="email"
                    value={friends.email}
                    onChange={handleChange}
                />
                <button type="submit">Add Friend</button>
            </form>
        <div>
            {friends.map((friend) => {
                return (
                    <div>
                        {friend.id}
                        {friend.name}
                        {friend.age}
                        {friend.email}
                    </div>
                )
            })}
        </div>
        </div>
    )
}


export default FriendsList;