import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate } from "react-router-dom";

export default function AccountPage() {
    const { ready, user } = useContext(UserContext);
    
    if(!ready) {
        return 'Loading...'
    }

    if(ready && !user) {
        return <Navigate to={'/login'} />
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-4">
                <Link className="py-2 px-6  bg-gray-300 rounded-full" to={'/account'} > My Profile</Link>
                <Link className="py-2 px-6 " to={'/account/bookings'} >My Bookings</Link>
                <Link className="py-2 px-6 " to={'/account/places'} >My Accomodations</Link>
            </nav>
        </div>
    )
}