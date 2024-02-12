import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-700-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" px-5 ">
          <Image
            src={`/images/gallary.png`}
            alt="Gallary img"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              about
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4 pr-4 ">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
