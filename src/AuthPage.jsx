import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Backend API URL
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://sdfcbackend.vercel.app';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const payload = isLogin 
      ? { email: formData.email, password: formData.password } 
      : formData;

    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload, {
        withCredentials: true 
      });

      if (response.data.success) {
        setMessage(isLogin ? "Login Successful! Redirecting..." : "Registration Successful! Please Login.");
        if (isLogin) {
          if (response.data.user) {
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
          }
          setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
        } else {
          setIsLogin(true);
        }
      } else {
        setError(response.data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1c9c9c]/10 font-sans antialiased px-4 py-8">
      {/* Main Container Card mirroring the layout proportions */}
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[940px] min-h-[580px] flex flex-col md:flex-row overflow-hidden border border-white/20">
        
        {/* LEFT SIDE: Welcome Graphic Aspect (Hidden on very small viewports) */}
        <div className="relative md:w-[45%] bg-gradient-to-br from-[#d2ebd4] via-[#e2f3df] to-[#f4fbf1] p-10 flex flex-col justify-between overflow-hidden">
          {/* Wave/Curve Overlay shape context */}
          <div className="absolute top-0 right-0 h-full w-16 bg-[#1f7060] opacity-10 rounded-l-[100%] pointer-events-none transform translate-x-8" />
          
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-widest text-[#3d6854] font-serif uppercase">
              Welcome
            </h1>
          </div>

          {/* Stylized CSS Illustration Elements to represent the custom vector artwork */}
          <div className="relative w-full h-56 mt-4 flex items-end justify-center">
            {/* Background Mountains */}
            <div className="absolute bottom-0 left-4 w-40 h-40 bg-[#99cbab]/40 rounded-t-full filter blur-[1px]" />
            <div className="absolute bottom-0 right-4 w-48 h-48 bg-[#b8dfc4]/50 rounded-t-full filter blur-[1px]" />
            
            {/* Layered Forest Pine Shapes */}
            <div className="absolute bottom-4 left-16 w-16 h-32 bg-[#2d7b4f] clip-path-triangle" style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }} />
            <div className="absolute bottom-6 right-20 w-20 h-40 bg-[#1f5a3d] clip-path-triangle" style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }} />
            <div className="absolute bottom-2 left-1/3 w-12 h-24 bg-[#2d7b4f] clip-path-triangle" style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }} />
          </div>

          {/* Centered SVG illustration (simplified for CSS) */}
          <div className="absolute bottom-0 left-0 right-0 h-64 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 200 200" className="w-32 h-32">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#1f5a3d" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 text-center md:text-left mt-8">
            <p className="text-[#3d6854] text-sm font-medium opacity-80 leading-relaxed">
              Prepare for success with our comprehensive study materials and expert guidance. Join thousands of students advancing their careers.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Login/Register Form */}
        <div className="md:w-[55%] bg-gradient-to-br from-[#1c9c9c] to-[#157d7d] p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Hello!' : 'Join Us!'}
            </h2>
            <p className="text-[#a8d9d7] text-sm">
              {isLogin 
                ? 'We are glad to see you again :)' 
                : 'Create your account to get started'}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-400 text-red-200 rounded-md text-sm">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-400 text-green-200 rounded-md text-sm">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0d5a56] border border-[#2ba39f]/30 text-white placeholder-[#7db8b4] focus:outline-none focus:border-[#4fc3bd] transition"
                />
              </div>
            )}

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#0d5a56] border border-[#2ba39f]/30 text-white placeholder-[#7db8b4] focus:outline-none focus:border-[#4fc3bd] transition"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-[#0d5a56] border border-[#2ba39f]/30 text-white placeholder-[#7db8b4] focus:outline-none focus:border-[#4fc3bd] transition"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-[#4fc3bd] text-sm hover:text-white transition">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-[#d4f547] text-[#1f5a3d] font-bold rounded-lg hover:bg-[#e5ff66] transition shadow-lg"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#a8d9d7] text-sm">
              {isLogin ? "New to the platform? " : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setMessage('');
                }}
                className="text-[#d4f547] font-semibold hover:text-white transition"
              >
                {isLogin ? 'Join now' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
