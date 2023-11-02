import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

/* eslint-disable react/no-unescaped-entities */
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);


    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/login', { email, password });
            setUser(data);
            alert('Logged in Bhoza');

            setRedirect(true);
        } catch (error) {
            alert('Login failed.')
        }
    }

    if(redirect) {
        return <Navigate to={'/'}/>
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Logina</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
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
                    <button className="primary">Logina</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an accont yet? <Link to={'/register'}
                        className="underline text-black"
                        >
                             Register Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}