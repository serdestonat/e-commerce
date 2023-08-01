import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>About</p>
          </div>
        </Link>
        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>FAQ</p>
          </div>
        </Link>
        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>Privacy Policy</p>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>Cookies</p>
          </div>
        </Link>
        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>Terms & Conditions</p>
          </div>
        </Link>
        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>Partnership</p>
          </div>
        </Link>
      </div>
      <div>
        <h3 className="bold">Reach Us</h3>
        <div className="flex-container">
          <span>+(999) 999-99-99</span>
        </div>

        <Link href="/" className="link-footer">
          <div className="flex-container">
            <p>Contact Form</p>
          </div>
        </Link>
      </div>
      <div>
        <h3 className="bold">Follow Us</h3>
        <div className="flex-container"></div>
        <Link href="https://twitter.com/" className="link-footer">
          <div className="flex-container">
            <Image
              src="/twitter.png"
              alt="tweet"
              width={25}
              height={25}
            ></Image>
          </div>
        </Link>
        <Link href="https://instagram.com/" className="link-footer">
          <div className="flex-container">
            <Image
              src="/instagram.png"
              alt="insta"
              width={25}
              height={25}
            ></Image>
          </div>
        </Link>
        <Link href="https://pinterest.com/" className="link-footer">
          <div className="flex-container">
            <Image
              src="/pinterest.png"
              alt="pin"
              width={25}
              height={25}
            ></Image>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
