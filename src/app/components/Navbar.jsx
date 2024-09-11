import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg h-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo or Home */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl mr-10 font-bold text-indigo-600">
                PropertySite
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-4">
            <Link href="/">
              <span className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-md font-medium">
                Home
              </span>
            </Link>
            <Link href="/">
              <span className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-md font-medium">
                Properties
              </span>
            </Link>
          </div>

          {/* Login/Signup Buttons */}
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/signin">
              <span className="text-gray-800 hover:text-indigo-600 px-4 py-2 rounded-md font-medium">
                Login
              </span>
            </Link>
            <Link href="/signup">
              <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
