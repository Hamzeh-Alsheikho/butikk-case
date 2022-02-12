import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Image src="/logo.png" width={128} height={37}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/butikk"> Products</Link>
      <Link href="/categories/"> Catetogries</Link>
      <Link href="/about"> About</Link>
      <Link href="/contact"> Contact us</Link>
      <Link href="/cart"> Cart</Link>
    </nav>
  );
};

export default Navbar;
