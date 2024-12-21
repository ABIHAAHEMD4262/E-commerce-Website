"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  backgroundColor?: string; // Optional prop for background color
}

const Header: React.FC<HeaderProps> = ({ backgroundColor = "rgba(251, 235, 181, 1)" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className="h-[100px] w-full flex items-center justify-between px-6 md:px-16"
      style={{ backgroundColor }}
    >
      {/* Navigation Menu */}
      <nav className="flex items-center gap-4 md:gap-10 text-center">
        <Link href="/" legacyBehavior>
          <a className="text-sm md:text-base font-medium text-black hover:underline">Home</a>
        </Link>
        <Link href="/shop" legacyBehavior>
          <a className="text-sm md:text-base font-medium text-black hover:underline">Shop</a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="text-sm md:text-base font-medium text-black hover:underline">About</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-sm md:text-base font-medium text-black hover:underline">Contact</a>
        </Link>
      </nav>

      {/* Icons Section */}
      <div className="hidden md:flex flex-row items-center sm:gap-4 md:gap-8">
        <Link href="/account" aria-label="Account">
          <Image
            src="/icons/Account.png"
            alt="Account"
            width={22.17}
            height={22.17}
            className="hover:opacity-75"
            layout="intrinsic"
          />
        </Link>
        <Image
          src="/icons/Search.png"
          alt="Search"
          width={22.17}
          height={22.17}
          className="hover:opacity-75"
          layout="intrinsic"
        />
        <Image
          src="/icons/Heart.png"
          alt="Favorites"
          width={23.33}
          height={20.81}
          className="hover:opacity-75"
          layout="intrinsic"
        />
        <Link href="/cart" aria-label="Cart">
          <Image
            src="/icons/Cart.png"
            alt="Cart"
            width={24.53}
            height={22.06}
            className="hover:opacity-75"
            layout="intrinsic"
          />
        </Link>
      </div>

      {/* Burger Icon for Smaller Screens */}
      <div className="relative md:hidden">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          <Image
            src="/icons/headericon.png"
            alt="Menu"
            width={70}
            height={50}
            className="hover:opacity-75"
            layout="intrinsic"
          />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-[50px] bg-white shadow-md rounded-lg w-[200px] z-50">
            <ul className="flex flex-row p-4 gap-4">
              <li>
                <Link href="/account" aria-label="Account">
                  <Image
                    src="/icons/Account.png"
                    alt="Account"
                    width={22.17}
                    height={22.17}
                    className="hover:opacity-75"
                    layout="intrinsic"
                  />
                </Link>
              </li>
              <li>
                <Image
                  src="/icons/Search.png"
                  alt="Search"
                  width={22.17}
                  height={22.17}
                  className="hover:opacity-75"
                  layout="intrinsic"
                />
              </li>
              <li>
                <Image
                  src="/icons/Heart.png"
                  alt="Favorites"
                  width={23.33}
                  height={20.81}
                  className="hover:opacity-75"
                  layout="intrinsic"
                />
              </li>
              <li>
                <Link href="/cart" aria-label="Cart">
                  <Image
                    src="/icons/Cart.png"
                    alt="Cart"
                    width={24.53}
                    height={22.06}
                    className="hover:opacity-75"
                    layout="intrinsic"
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
