import { Loader } from "lucide-react";
import Account from "../components/account";
import SignIn from "../components/sign-in";
import { useAuthSession } from "../hooks/useAuthSession";

const Login = () => {
  const { isSignedIn, isLoading, signOut } = useAuthSession();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin w-12 h-12 text-gray-600" />
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 gap-4 justify-center text-center items-center">
        {isSignedIn ? <Account signOut={signOut} /> : <SignIn />}
      </main>
    </div>
  );
};

export default Login;
