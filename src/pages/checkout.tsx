import Navbar from "../components/navbar";

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-4 justify-center text-center items-center">
        <button>Pay</button>
      </main>
    </div>
  );
};

export default Checkout;
