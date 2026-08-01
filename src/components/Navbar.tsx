import Image from "next/image";
import Menu from "../assets/icons/menu.svg";

const links = ["About", "Features", "Updates", "Help", "Customers"];

export default function Navbar() {
  return (
    <header className="bg-black px-4">
      <div className="container flex items-center justify-between py-4">
        <div className="relative">
          <div className="absolute inset-x-0 top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md" />
          <Image
            src={"/favicon.webp"}
            alt="favicon"
            width={100}
            height={100}
            className="relative mt-1 size-12"
          />
        </div>

        <button className="inline-flex size-10 items-center justify-center rounded-lg border border-white/30 sm:hidden">
          <Menu className="text-white" />
        </button>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/60 transition hover:text-white"
            >
              {link}
            </a>
          ))}

          <button className="rounded-lg bg-white px-4 py-2 text-black">
            Get for free
          </button>
        </nav>
      </div>
    </header>
  );
}
