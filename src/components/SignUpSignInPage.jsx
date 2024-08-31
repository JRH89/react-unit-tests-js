'use client'

import { useState, useEffect } from 'react';

function SignUpSignInPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Check registration status on client side
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsRegistered(!!user);
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    localStorage.setItem('user', JSON.stringify({ username, password }));
    setIsRegistered(true);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setIsLoggedIn(true);
    } else {
      setError('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen px-10 max-w-sm text-center w-full mx-auto gap-5 h-full space-y-5 flex flex-col items-center justify-center">
        <h1>Welcome to your dashboard!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-10 max-w-sm text-center w-full mx-auto gap-5 h-full space-y-5 flex flex-col items-center justify-center">
      {isRegistered ? (
        <form className="space-y-5" onSubmit={handleSignIn}>
          <h1 className="text-center text-2xl">Sign In</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input className="text-black p-2 rounded ml-2" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" className="text-black p-2 rounded ml-2" id="password" name="password" required />
          </div>
          <button type="submit" className="p-2 rounded bg-blue-500 text-white">Sign In</button>
          {error && <div>{error}</div>}
        </form>
      ) : (
        <form className="space-y-5" onSubmit={handleSignUp}>
          <h1 className="text-center text-2xl">Sign Up</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input className="text-black p-2 rounded ml-2" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" className="text-black p-2 rounded ml-2" id="password" name="password" required />
          </div>
          <button type="submit" className="p-2 rounded bg-green-500 text-white">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default SignUpSignInPage;
