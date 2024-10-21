import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth, db } from '../components/firebase';
import { Link } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleSignIn from '../assets/googleSignIn.png'


const Details = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    firstname: firstName,
                    lastname: lastName,
                    email: user.email,
                });
            }
            console.log("User Registered");
            toast.success("User Registered succesfully!!",{
              position: 'top-center',
            });
            window.location.href="/";
        } catch(error) {
            console.log(error.message);
            toast.success("Error sahi kar gandu",{
              position: 'bottom-center',
            });
        }
    }

    return (
        <section className="bg-indigo-50 font-mono mt-0">
          <div className="container m-auto max-w-2xl py-12 w-auto">
            <div
              className="bg-white px-6 py-8 shadow-md rounded-md border md:m-0"
            >
              <form>
                <h2 className="text-3xl text-center font-semibold mb-6">R E G I S T E R</h2>
                <div className="mb-1">
                    <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                        >First Name</label
                    >
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter First Name"
                        value={firstName}
                        autoComplete="new-password"
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                        >Last Name</label
                    >
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter Last Name"
                        value={lastName}
                        autoComplete="new-password"
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                  <label
                    htmlFor="contact_email"
                    className="block text-gray-700 font-bold mb-2"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Enter Email"
                    required
                    value={email}
                    autoComplete="new-password"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Enter Password'
                        autoComplete="new-password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className=' flex justify-center' >
                  <button onClick={handleRegister}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-32 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <Link>
                        Sign Up
                    </Link>
                  </button>
                </div>
              </form>
              <div className='flex items-center justify-center flex-col'>
                <p className='mt-4 mb-4'>....................OR....................</p>
                <img 
                  className='h-12 w-auto'
                  src={googleSignIn} 
                  alt="" 
                />
              </div>
            </div>
          </div>
        </section>
      )
}

export default Details