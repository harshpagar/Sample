import { useNavigate } from 'react-router-dom';
import '../styles/User.css';
import Button from '@mui/material/Button';



export const UserDetails = () =>
{
    const userlogin =  JSON.parse(localStorage.getItem("harshlogin"))
    const navigate = useNavigate()

    const logout = () =>
    {
        localStorage.removeItem("harshlogin");
        alert("Logout Successfull")
        navigate("/")        
    }

    return(
        <>
         
            <h3 className='ud'>User Details</h3>
            <div className='mainu'>
                <h4>Name : {userlogin[0].name}</h4>
                <h4>Email : {userlogin[0].username}</h4>
                <h4>Mobile : {userlogin[0].mobileno}</h4>
           
            <Button variant="outlined" style={{color: "white",backgroundColor: "rgb(52, 98, 82)",width:200,marginBottom:"15px"}} onClick={logout}  >
                    LogOut
            </Button> 
            </div><br />
           
        </>
    )
}