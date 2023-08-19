import Navbar from "../features/navbar/Navbar"
import UserProfile from "../features/user/components/UserProfile";


function UsersProfilePage() {
    return ( 
        <div>
        <Navbar>
            <UserProfile></UserProfile>
        </Navbar>
        
        </div>
     );
}

export default UsersProfilePage;