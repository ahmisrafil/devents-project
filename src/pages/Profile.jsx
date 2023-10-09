import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="h-[70vh] flex flex-col justify-center  font-semibold my-8">
            <h3 className="text-center text-xl">Welcome to {user?.displayName
            } Profile</h3>
            <img className="h-[200px] w-[200px] mx-auto my-4 rounded-full" src={user?.photoURL} alt="" />
            <h3 className="text-center text-lg font-semibold">{user.displayName}</h3>
        </div>
    );
};

export default Profile;