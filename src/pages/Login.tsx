// pages/login.js
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react'; 

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle email/password login here
    console.log("Logging in with email and password:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/path/to/logo.png" // Replace with actual path to your logo
            alt="App Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome back</h2>
        <p className="text-sm text-gray-600 mb-6">Please enter your details to sign in.</p>

        {/* Social Login Buttons */}
        <div className="flex space-x-4 mb-6">
          {/* <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg">
            <Image src="/apple-logo.png" alt="Apple" width={20} height={20} />
          </button> */}
        <GoogleOAuthProvider clientId="338976857027-gq4dq4k9rp20cdukhinchc6nec48gt4m.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(response) => console.log("Google Login Success:", response)}
              onError={() => console.log("Google Login Failed")}
            
            />
          </GoogleOAuthProvider>
          {/* <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg">
            <Image src="/twitter-logo.png" alt="Twitter" width={20} height={20} />
          </button> */}
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <span className="w-full border-t border-gray-300"></span>
          <span className="px-4 text-gray-500">OR</span>
          <span className="w-full border-t border-gray-300"></span>
        </div>

        {/* Email and Password Fields */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-gray-700 font-medium">E-Mail Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-left text-gray-700 font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleLogin}
          className="w-full p-2 text-white bg-black rounded-lg font-medium hover:bg-gray-800"
        >
          Sign in
        </button>

        {/* Sign Up Link */}
        <p className="mt-6 text-sm text-gray-600">
  Don&apos;t have an account yet? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
</p>
      </div>
    </div>
  );
};

export default Login;
