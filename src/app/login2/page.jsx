'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const Login2Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/80 p-4 relative overflow-hidden">
      {/* sliding bg */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-white/5 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative w-full max-w-6xl min-h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          
          <div className={`flex items-center justify-center p-8 md:p-12 transition-all duration-700 ${
            isSignUp ? '' : ''
          }`}>
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-4 shadow-lg">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Welcome Back
                </h2>
                <p className="text-gray-500">Sign in to your account</p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm px-3">
                  <label className="flex items-start space-x-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-600 group-hover:text-gray-900">Remember me</span>
                  </label>
                  <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Sign In
                </button>

              </form>
            </div>
          </div>

          {/* Sign Up Form - Right Side */}
          <div className={`flex items-center justify-center p-8 md:p-12 transition-all duration-700 ${
            isSignUp ? '' : ''
          }`}>
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl mb-4 shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Create Account
                </h2>
                <p className="text-gray-500">Join us today</p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Username</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="Choose a username"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type={showSignUpPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      {showSignUpPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <label className="flex items-start space-x-2 cursor-pointer group pl-3">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900">
                    I agree to the <Link href="#" className="text-indigo-600 hover:underline">Terms of Service</Link> and <Link href="#" className="text-indigo-600 hover:underline">Privacy Policy</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* sliding Overlay Panel */}
        <div className={`absolute inset-y-0 w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 transition-all duration-700 ease-in-out ${
          isSignUp ? 'md:translate-x-full' : 'md:translate-x-0'
        } flex items-center justify-center p-8 md:p-12 z-10`}>
          <div className="text-center text-white space-y-6 relative">
            {/* floting Shape */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-32 h-32 bg-white/20 rounded-full blur-2xl top-10 left-10 animate-bounce"></div>
              <div className="absolute w-24 h-24 bg-white/20 rounded-full blur-2xl bottom-20 right-10 animate-pulse"></div>
              <div className="absolute w-40 h-40 bg-white/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="relative z-10 space-y-6">
              {!isSignUp ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-5xl font-bold">New Here?</h3>
                  <p className="text-lg opacity-90 max-w-md mx-auto leading-relaxed">
                    Join our amazing community today and unlock exclusive features designed just for you!
                  </p>
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="px-10 py-4 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
                  >
                    Sign Up Now
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-5xl font-bold">Welcome Back!</h3>
                  <p className="text-lg opacity-90 max-w-md mx-auto leading-relaxed">
                    Already have an account? Sign in to continue your journey and access all your data.
                  </p>
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="px-10 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
                  >
                    Sign In Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2Page;