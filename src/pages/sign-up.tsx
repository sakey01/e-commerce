import { ArrowLeft, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    password2?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: {
      email?: string;
      password?: string;
      password2?: string;
    } = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (!password2) {
      newErrors.password2 = "Please confirm your password";
    } else if (password !== password2) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Run validatiosn checks before proceeding
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});


    // Sign up process
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("User already registered")) {
          setErrors({ email: "An account with this email already exists" });
        } else {
          setErrors({ general: error.message });
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ general: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };


  // Components
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-4 bg-red-600">
      {/* Back arrow */}
      <ArrowLeft
        className="absolute left-5 top-5 text-white text-2xl cursor-pointer hover:text-red-200 transition-colors"
        onClick={() => navigate("/login")}
      />

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-600 mt-2">Join us today!</p>
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-sm">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                className={`w-full pl-11 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 ${
                  errors.password
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password2"
                name="password2"
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm your password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                  if (errors.password2) setErrors({ ...errors, password2: "" });
                }}
                className={`w-full pl-11 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 ${
                  errors.password2
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword2 ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password2 && <p className="text-red-500 text-sm mt-1">{errors.password2}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 mt-6 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 hover:shadow-lg transform hover:scale-[1.02]"
            }`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Sign In Link */}
          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
