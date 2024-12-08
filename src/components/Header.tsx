import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  backgroundColor?: string; // Optional prop for background color
}

const Header: React.FC<HeaderProps> = ({ backgroundColor = 'rgba(251, 235, 181, 1)' }) => {
  return (
    <header className="h-[100px] w-full flex items-center justify-between md:px-16" style={{ backgroundColor }}>
      <nav className="flex items-center gap-6 md:gap-10 font-poppins text-center">
        <Link href="/" className="text-sm md:text-base font-medium text-black">
          Home
        </Link>
        <Link href="/shop" className="text-sm md:text-base font-medium text-black">
          Shop
        </Link>
        <Link href="/about" className="text-sm md:text-base font-medium text-black">
          About
        </Link>
        <Link href="/contact" className="text-sm md:text-base font-medium text-black">
          Contact
        </Link>
      </nav>
      <div className="flex items-center md:gap-8 gap-5">
      <Link href="/account">
        <Image
          src="/icons/account.png" alt="Logo" width={22.17}height={22017}className="hover:opacity-75"/> </Link>
        <Image src="/icons/Search.png" alt="Search" width={22.17} height={22.17} />
        <Image src="/icons/Heart.png" alt="Favorites" width={23.33} height={20.81} />
        <Image src="/icons/Cart.png" alt="Cart" width={24.53} height={22.06} />
      </div>
    </header>
  );
};

export default Header;
