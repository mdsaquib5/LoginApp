'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const Login2Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/80 p-2 sm:p-4 md:p-6 relative overflow-hidden">
      {/* sliding bg */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -top-32 -left-32 sm:-top-48 sm:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative w-full max-w-6xl min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
          
          <div className={`flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-700 ${
            isSignUp ? 'hidden md:flex' : 'flex'
          }`}>
            <div className="w-full max-w-md space-y-6 sm:space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
                  <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Welcome Back
                </h2>
                <p className="text-sm sm:text-base text-gray-500">Sign in to your account</p>
              </div>

              <form className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm px-1 sm:px-3">
                  <label className="flex items-start space-x-2 cursor-pointer group">
                    <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-600 group-hover:text-gray-900">Remember me</span>
                  </label>
                  <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Sign In
                </button>

                {/* Mobile toggle button */}
                <div className="md:hidden text-center pt-2">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(true)}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sign Up Form - Right Side */}
          <div className={`flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-700 ${
            isSignUp ? 'flex' : 'hidden md:flex'
          }`}>
            <div className="w-full max-w-md space-y-6 sm:space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
                  <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Create Account
                </h2>
                <p className="text-sm sm:text-base text-gray-500">Join us today</p>
              </div>

              <form className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 ml-1">Username</label>
                  <div className="relative group">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="Choose a username"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type={showSignUpPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      {showSignUpPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                <label className="flex items-start space-x-2 cursor-pointer group pl-1 sm:pl-3">
                  <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900">
                    I agree to the <Link href="#" className="text-indigo-600 hover:underline">Terms of Service</Link> and <Link href="#" className="text-indigo-600 hover:underline">Privacy Policy</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Create Account
                </button>

                {/* Mobile toggle button */}
                <div className="md:hidden text-center pt-2">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(false)}
                      className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* sliding Overlay Panel - Hidden on mobile */}
        <div className={`hidden md:flex absolute inset-y-0 w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 transition-all duration-700 ease-in-out ${
          isSignUp ? 'md:translate-x-full' : 'md:translate-x-0'
        } items-center justify-center p-6 lg:p-12 z-10`}>
          <div className="text-center text-white space-y-4 md:space-y-6 relative px-4">
            {/* floting Shape */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full blur-2xl top-10 left-10 animate-bounce"></div>
              <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full blur-2xl bottom-20 right-10 animate-pulse"></div>
              <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="relative z-10 space-y-4 md:space-y-6">
              {!isSignUp ? (
                <div className="space-y-4 md:space-y-6 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl mb-3 md:mb-4">
                    <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">New Here?</h3>
                  <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-md mx-auto leading-relaxed px-4">
                    Join our amazing community today and unlock exclusive features designed just for you!
                  </p>
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="px-8 py-3 md:px-10 md:py-4 text-sm md:text-base bg-white text-indigo-700 rounded-lg md:rounded-xl font-semibold hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
                  >
                    Sign Up Now
                  </button>
                </div>
              ) : (
                <div className="space-y-4 md:space-y-6 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl mb-3 md:mb-4">
                    <Lock className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">Welcome Back!</h3>
                  <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-md mx-auto leading-relaxed px-4">
                    Already have an account? Sign in to continue your journey and access all your data.
                  </p>
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="px-8 py-3 md:px-10 md:py-4 text-sm md:text-base bg-white text-blue-700 rounded-lg md:rounded-xl font-semibold hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
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