import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";
import { supabase } from "../supabase";

const Login = () => {
  const userSession = async () => {
    try {
      const { data } = await supabase.auth.getSession();
      console.log(data.session);
    } catch (e) {
      console.error(e);
    }
  };
  userSession();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 gap-4 justify-center text-center items-center">
        <SignIn /> : <SignUp />
      </main>
    </div>
  );
};

export default Login;
