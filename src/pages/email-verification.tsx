import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../supabase";
import { Mail, CheckCircle, XCircle, RefreshCw } from "lucide-react";

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get the token hash from URL parameters
        const tokenHash = searchParams.get('token_hash');
        const type = searchParams.get('type');

        if (!tokenHash || type !== 'email') {
          setVerificationStatus('error');
          setMessage('Invalid verification link');
          return;
        }

        // Verify the email
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: 'email'
        });

        if (error) {
          setVerificationStatus('error');
          setMessage(error.message || 'Failed to verify email');
        } else if (data.user) {
          setVerificationStatus('success');
          setMessage('Email verified successfully!');
          // Redirect to dashboard after 3 seconds
          setTimeout(() => {
            navigate('/account');
          }, 3000);
        }
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus('error');
        setMessage('An unexpected error occurred');
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  const resendVerification = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        const { error } = await supabase.auth.resend({
          type: 'signup',
          email: user.email
        });
        
        if (error) {
          setMessage('Failed to resend verification email');
        } else {
          setMessage('Verification email resent! Check your inbox.');
        }
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to resend verification email');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          {verificationStatus === 'loading' && (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-red-600 animate-spin" />
            </div>
          )}
          {verificationStatus === 'success' && (
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          )}
          {verificationStatus === 'error' && (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {verificationStatus === 'loading' && 'Verifying Email...'}
          {verificationStatus === 'success' && 'Email Verified!'}
          {verificationStatus === 'error' && 'Verification Failed'}
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">{message}</p>

        {/* Actions */}
        {verificationStatus === 'success' && (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700 text-sm">
                Redirecting to your account in a few seconds...
              </p>
            </div>
            <button
              onClick={() => navigate('/account')}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Go to Account
            </button>
          </div>
        )}

        {verificationStatus === 'error' && (
          <div className="space-y-4">
            <button
              onClick={resendVerification}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Resend Verification Email
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Back to Login
            </button>
          </div>
        )}

        {verificationStatus === 'loading' && (
          <p className="text-sm text-gray-500">
            Please wait while we verify your email address...
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;