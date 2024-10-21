import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth, db } from '../components/firebase';
import { Link } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            window.location.href='/';
            console.log("User Logged in Succesfully");
            toast.success("User Logged in Succesfully!!",{
              position: 'top-center',
            });
        } catch(error) {
            console.log(error.message);
            toast.success("Email ya password galat hai",{
              position: 'bottom-center',
            });
        }
    }

    return (
        <section className="bg-indigo-50 font-mono pb-64">
          <div className="container m-auto max-w-2xl py-12 w-auto">
            <div
              className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
            >
              <form>
                <h2 className="text-3xl text-center font-semibold mb-6">L O G I N</h2>
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
                  <button onClick={handleSubmit}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-32 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <Link>
                        Log In
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )
}

export default Login;