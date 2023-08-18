import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoColor = () => {
  return (
    <div className="logo_wrapper">
      <Link href="/" className="logo">
        <Image
          width={180}
          height={50}
          src="/images/logo-color.png"
          alt="Logo"
          className="logo_color w-full"
        />
      </Link>
    </div>
  );
};

export default LogoColor;
