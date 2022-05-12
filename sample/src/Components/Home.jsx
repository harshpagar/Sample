import React from "react"
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

const Nav = useNavigate();


const userlogin =  JSON.parse(localStorage.getItem("harshlogin"))

const user = () =>
{
    if(userlogin == null)
    {
        Nav("/login");
    }
    else
    {     
        console.log(userlogin[0].name)       
        Nav("/user");
    }
}



    return (
        <>
        <div className='nav'>
            <div className='admin'>         
                <span >
                    <br /><strong  onClick={user}><svg   xmlns="http://www.w3.org/2000/svg" className="admin" width="24" height="24" marginRight="50px" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg></strong>
                </span>
            </div>  
        </div>
       
        </>
    )
}

export {Home}
