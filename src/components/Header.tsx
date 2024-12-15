import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  backgroundColor?: string; // Optional prop for background color
}

const Header: React.FC<HeaderProps> = ({ backgroundColor = 'rgba(251, 235, 181, 1)' }) => {
  return (
    <header
      className="h-[100px] w-full flex items-center  justify-between px-6 md:px-16"
      style={{ backgroundColor }}
    >
      {/* Navigation Menu */}
      <nav className="flex items-center  gap-4 md:gap-10 text-center">
        <Link href="/" className="text-sm md:text-base font-medium text-black hover:underline">
          Home
        </Link>
        <Link href="/shop" className="text-sm md:text-base font-medium text-black hover:underline">
          Shop
        </Link>
        <Link href="/about" className="text-sm md:text-base font-medium text-black hover:underline">
          About
        </Link>
        <Link href="/contact" className="text-sm md:text-base font-medium text-black hover:underline">
          Contact
        </Link>
      </nav>

      {/* Icons Section */}
      <div className="md:flex items-center gap-4 md:gap-8">
        <Link href="/account" aria-label="Account">
          <Image
            src="/icons/account.png"
            alt="Account"
            width={22.17}
            height={22.17}
            className="hover:opacity-75"
          />
        </Link>
        <Image
          src="/icons/Search.png"
          alt="Search"
          width={22.17}
          height={22.17}
          className="hover:opacity-75"
          aria-label="Search"
        />
        <Image
          src="/icons/Heart.png"
          alt="Favorites"
          width={23.33}
          height={20.81}
          className="hover:opacity-75"
          aria-label="Favorites"
        />
        
        <Link href="/cart" aria-label="Account">
        <Image
          src="/icons/Cart.png"
          alt="Cart"
          width={24.53}
          height={22.06}
          className="hover:opacity-75"
        />
        </Link>

      </div>

    </header>
  );
};
export default Header;