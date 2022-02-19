import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <Image src="/logo.png" width={120} height={30} />{" "}
        </a>
      </div>
      <Link href="/">Home</Link>
      <Link href="/butikk"> Categories & Products</Link>
      <Link href="/about"> About</Link>
      <Link href="/contact"> Contact us</Link>
      <a href="/cart">
        <Image src="/cart.png" width={28} height={20} />
      </a>
    </nav>
  );
};

export default Navbar;
