import Link from "next/link";
import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 px-30px flex justify-center text-1xl mt-6 z-10">
      <div className="flex gap-5 font-bold w-2/5 text-center py-2 px-3 rounded-full text-ghost-white/40  backdrop-blur-sm bg-better-black/60 center justify-center text-xl">

        <ul className="flex lg:flex-row gap-10 justify-center items-center md:flex-col lg:static md:absolute">
          <li className="nav-list">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-list">
            <Link href="/">About</Link>
          </li>
          <li className="nav-list">
            <Link href="/">Work</Link>
          </li>
          <li className="nav-list">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
