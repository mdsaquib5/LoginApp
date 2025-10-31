"use client";
import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  CheckCircle,
  Eye,
  EyeOff,
  Check,
} from "lucide-react";

// for iterate the icons
const icons = {
  user: User,
  email: Mail,
  lock: Lock,
  check: CheckCircle,
};

// reusable inputs components
const InputField = ({
  iconType,
  type = "text",
  placeholder,
  showPasswordToggle,
  isPasswordVisible,
  onTogglePassword,
}) => {
  const Icon = icons[iconType];

  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-linear-to-br from-purple-500 to-violet-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <input
        type={
          showPasswordToggle ? (isPasswordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
        className="w-full pl-20 pr-14 py-5 bg-linear-to-r from-gray-50 to-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white focus:shadow-xl transition-all duration-300 text-gray-800 placeholder-gray-400 font-medium hover:border-purple-400"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700 hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-purple-100 cursor-pointer"
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        >
          {isPasswordVisible ? (
            <EyeOff className="w-6 h-6" />
          ) : (
            <Eye className="w-6 h-6" />
          )}
        </button>
      )}
    </div>
  );
};

export default function LoginForm1() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-10 relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-100 rounded-full opacity-50 animate-pulse" />
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-purple-200 rounded-full opacity-70" />
            <h1 className="text-6xl font-bold bg-linear-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4 relative">
              {isSignUp ? "Create Account" : "Hello!"}
            </h1>
            <p className="text-gray-600 text-lg font-medium">
              {isSignUp ? "Sign up to get started" : "Sign in to your account"}
            </p>
            <div className="mt-4 flex gap-2">
              <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-violet-600 rounded-full" />
              <div className="w-8 h-1 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-full" />
            </div>
          </div>
          <form className="space-y-6">
            {isSignUp && (
              <InputField iconType="user" type="text" placeholder="Full Name" />
            )}

            <InputField iconType="email" type="email" placeholder="E-mail" />

            <InputField
              iconType="lock"
              type="password"
              placeholder="Password"
              showPasswordToggle
              isPasswordVisible={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            {isSignUp && (
              <InputField
                iconType="check"
                type="password"
                placeholder="Confirm Password"
                showPasswordToggle
                isPasswordVisible={showConfirmPassword}
                onTogglePassword={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              />
            )}

            {!isSignUp && (
              <div className="flex items-center justify-between px-2">
                <label className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-6 h-6 border-2 border-purple-300 rounded-lg bg-white peer-checked:bg-linear-to-br peer-checked:from-purple-600 peer-checked:to-violet-600 peer-checked:border-purple-600 transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-lg flex items-center justify-center">
                    <Check
                      className="w-4 h-4 text-white hidden peer-checked:block"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="ml-3 text-gray-700 font-semibold group-hover:text-purple-700 transition-colors select-none">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-purple-600 font-semibold hover:underline cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
            </button>

            <div className="text-center">
              <p className="text-gray-600 text-base font-medium">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="mt-2 text-purple-600 font-bold text-lg hover:underline hover:scale-105 transition-all cursor-pointer"
              >
                {isSignUp ? "Sign In" : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* design & pattern for the login page */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden bg-linear-to-br from-purple-600 via-violet-600 to-fuchsia-600">
        {/* Circles */}
        <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white/30 rounded-full animate-pulse" />
        <div className="absolute top-20 right-32 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/40 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-8 border-white/20 rounded-full" />
        <div className="absolute bottom-32 right-40 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute bottom-40 right-32 w-24 h-24 border-4 border-white/30 rounded-full" />

        <div className="absolute top-1/4 left-20 w-32 h-32 border-4 border-white/20 rotate-45" />
        <div className="absolute top-1/3 left-32 w-20 h-20 bg-white/10 rotate-12" />

        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-b-70 border-b-white/20" />
        <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-30 border-l-transparent border-r-30 border-r-transparent border-b-50 border-b-white/15 rotate-180" />

        <div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-white/10 rotate-45"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        <div className="absolute bottom-1/4 left-1/3 space-y-3">
          <div className="w-32 h-1 bg-white/20" />
          <div className="w-24 h-1 bg-white/30" />
          <div className="w-28 h-1 bg-white/20" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <div className="text-center">
            <div className="mb-10 flex justify-center">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl border-4 border-white/30">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <h2 className="text-6xl font-bold mb-8 drop-shadow-2xl">
              {isSignUp ? "Join Us!" : "Welcome Back!"}
            </h2>
            <p className="text-white/90 leading-relaxed max-w-lg text-xl drop-shadow-lg">
              {isSignUp
                ? "Create your account and start your journey with us today!"
                : "Sign in to continue your amazing journey with us."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}