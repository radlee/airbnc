import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

/* eslint-disable react/no-unescaped-entities */
export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
    
            alert('Registered. Now you may login.')
        } catch (error) {
            alert("Registration failed. Please try again later.")
        }
        
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Registarisha</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" 
                            placeholder="John Doe" 
                            value={name}
                            onChange={ev => setName(ev.target.value)}
                    />
                    <input type="email" 
                            placeholder="yourname@mail.com" 
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password" 
                            placeholder="password" 
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Registarisha</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have an accont ? <Link to={'/login'}
                        className="underline text-black"
                        >
                             Logina Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}