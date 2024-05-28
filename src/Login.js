import { Eye, EyeOff, HandshakeIcon, User2Icon } from 'lucide-react';
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const fixedEmail = 'test@gmail.com';
    const fixedPassword = 'test@123';

    if (email === fixedEmail && password === fixedPassword) {
      alert('Login Successful');
      onLogin();
    } else {
      alert('Incorrect Credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="p-10 border rounded-3xl w-full max-w-md border-gray-600">
        <h1 className="text-2xl text-center font-mono font-bold text-gray-600 mb-8">
          LOGIN
        </h1>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <input
              className="flex-1 rounded-lg p-4 text-gray-600 border border-gray-600 bg-white font-bold font-mono"
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={handleEmail}
            />
            <User2Icon className="text-gray-600 ml-2" />
          </div>
          <div className="flex items-center">
            <input
              className="flex-1 rounded-lg p-4 text-gray-600 border border-gray-600 bg-white font-bold font-mono"
              placeholder="Password"
              type={showPassword ? 'password' : 'text'}
              value={password}
              onChange={handlePassword}
            />
            <div className="cursor-pointer ml-2" onClick={handleClick}>
              {showPassword ? (
                <Eye className="text-gray-600" />
              ) : (
                <EyeOff className="text-gray-600" />
              )}
            </div>
          </div>
        </div>
        <button
          className="w-full p-4 bg-emerald-300 hover:border-gray-500 hover:rounded-3xl hover:text-white hover:bg-emerald-600 transition-all duration-500 font-mono font-bold text-gray-700 border border-gray-600 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="mt-8 grid text-gray-700 text-center">
        <p className="flex justify-center items-center text-3xl font-mono font-bold">
          // Welcome to the dashboard
          <HandshakeIcon className="h-8 w-8 ml-2 mt-1 text-purple-500" />
          
        </p>
        <p1 className=" mt-4 flex justify-center items-center text-3xl font-mono font-bold">

            Email: test@gmail.com ,  Password: test@123
          </p1>
      </div>
    </div>
  );
}

export default Login;
