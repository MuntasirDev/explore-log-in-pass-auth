import React from "react";
import {auth} from '../Friebase/Firebaseinit'
import { EmailAuthCredential } from "firebase/auth";

const SignUp = () => {

  const handleSignUp = e =>
{
   e.preventDafault()

   const email = e.target.email.value;
   console.log('email, password')

 const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
  
  console.log(result)
  })
  .catch((error) => {
    console.log(error)
  });

}

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl rounded-2xl border border-gray-200">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form onSubmit={handleSignUp} className="form space-y-2">
            <label className="label font-medium">Email</label>
            <input
              type="email" name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />

            <label className="label font-medium mt-3">Password</label>
            <input
              type="password" name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />


            <div className="text-right mt-1">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button className="btn btn-neutral w-full mt-4">Sign Up</button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a className="link link-hover font-medium">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
