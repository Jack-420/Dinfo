import React, { useEffect, useState } from 'react'
import { auth, db } from '../components/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import photo from '../assets/photo.jpg'
import Loading from '../components/Loading'

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user)=>{
            console.log(user);
            const docRef = doc(db,"Users",user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };
    useEffect(()=>{
        fetchUserData();
    },[]);
    async function handleLogout(){
        try{    
            await auth.signOut();
            window.location.href="/";
        } catch(error){
            console.log("Error logging out: ",error.message);
        }
    }
    return (
        <div>
            {userDetails ? (
                <div className='flex items-center justify-center h-screen bg-slate-100'>
                    <div className=' rounded-2xl font-mono justify-center items-center flex flex-col p-16 text-xl shadow-2xl shadow-black bg-white'>
                        <img src={photo} alt="" className="w-32 h-32 rounded-full object-cover mb-16" />
                        <h3 className='mb-8 text-3xl'>Welcome {userDetails.firstname} {userDetails.lastname}</h3>
                        <div>
                            <p>Email : {userDetails.email}</p>
                            <p>First Name : {userDetails.firstname}</p>
                            <p>Last Name : {userDetails.lastname}</p>
                        </div>
                        <button onClick={handleLogout} className='mt-4 hover:bg-blue-600 bg-blue-500 text-white border-x-2 border-y-2  p-2 rounded-lg'>
                            Log Out
                        </button>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Profile