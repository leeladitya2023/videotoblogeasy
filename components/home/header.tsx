import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="transition-colors duration-200 text-gray-700 hover:text-blue-600 font-medium"
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <nav className="container flex items-center justify-between px-8 py-6 mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
      <div className="flex lg:flex-1">
        <NavLink href="/">
          <span className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              VideoToBlog
            </span>
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/posts">Your Posts</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-3 items-center">
            <NavLink href="/dashboard">Upload a Video</NavLink>
            {/** Profile */}
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
