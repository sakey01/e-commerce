import { User, Settings, Package, LogOut, ShoppingBag } from "lucide-react";

const Account = ({ signOut }: { signOut: () => Promise<void> }) => {
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.error(e);
    }
  };

  const menuItems = [
    {
      icon: User,
      label: "Profile Settings",
      href: "#",
      description: "Update your personal information",
    },
    { icon: Package, label: "Order History", href: "#", description: "Track your purchases" },
    { icon: ShoppingBag, label: "Shopping Cart", href: "#cart", description: "Review your cart" },
    { icon: Settings, label: "Account Settings", href: "#", description: "Privacy & preferences" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              My Account
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center sticky top-8">
              <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
              <p className="text-gray-600 mb-6">Standard Member</p>

              <div className="space-y-4">
                <button
                  onClick={handleLogout}
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25"
                >
                  <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 group-hover:bg-red-600 rounded-xl transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
