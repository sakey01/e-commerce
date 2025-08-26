const Account = ({ signOut }: { signOut: () => Promise<void> }) => {
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 gap-4 justify-center text-center items-center">
        <h1>Welcome!</h1>
      </main>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
