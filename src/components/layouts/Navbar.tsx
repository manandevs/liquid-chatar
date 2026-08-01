"use client";

import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="hidden md:block z-50 fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
      <nav className="relative px-3 py-2 bg-white rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <Link
            href="/"
            className="inline-flex items-center gap-x-1.5 text-2xl text-neutral-900 font-semibold"
          >
            <Image
              src="/favicon.webp"
              alt="LiquidChatar"
              width={100}
              height={100}
              className="w-10 h-auto"
            />
            Chatar
          </Link>

          <div className="flex items-center justify-center">
            <Link
              href="#features"
              className="py-1.5 px-3 rounded-lg inline-flex items-center gap-x-1.5 text-neutral-900"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="py-1.5 px-3 rounded-lg inline-flex items-center gap-x-1.5 text-neutral-900"
            >
              Pricing
            </Link>
            <Link
              href="#faqs"
              className="py-1.5 px-3 rounded-lg inline-flex items-center gap-x-1.5 text-neutral-900"
            >
              FAQs
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <Button variant={"secondary"}>Sign in</Button>
            <Button>Get started</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
