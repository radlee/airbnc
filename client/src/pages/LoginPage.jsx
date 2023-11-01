import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function LoginPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Logina</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" name="" placeholder="yourname@mail.com" />
                    <input type="password" name="" placeholder="password" />
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