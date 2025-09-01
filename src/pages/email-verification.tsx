import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const Verify = () => {
  const [status, setStatus] = useState<string>("Verifying...");

  useEffect(() => {
    const handleVerify = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);

      if (error) {
        setStatus("Verification failed!");
        console.error(error);
      }
      else {
        setStatus("Verified");
      }
    };
    
    handleVerify();
  });

  return (
    <div className="min-h-screen justify-center items-center flex bg-red-600">
      <section className="flex flex-col bg-white p-8 shadow-md">
       <div>{status}</div>
      </section>
    </div>
  );
};

export default Verify;
