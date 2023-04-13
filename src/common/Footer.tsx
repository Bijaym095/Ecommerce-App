import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Cards from "../assets/images/cards.png";

import Container from "../common/Container";

const Footer: FC = () => {
  const footerTitleStyles = "font-bold capitalize mb-6";

  return (
    <footer className="bg-black text-white">
      <Container className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* footer-links */}
        <div>
          <NavLink className="mb-4 inline-block text-lg font-bold" to="/">
            Ecommerce
          </NavLink>

          {/* contact */}
          <h5 className={`${footerTitleStyles}`}>Contact</h5>
          <ul className="mb-4 space-y-2">
            <li>Kathmandu , Nepal</li>
            <li>
              <a href="tel:+977 9800 0000 00">+977 9800 0000 00</a>
            </li>
            <li>
              <a href="mailto:abc@info.com">abc@info.com</a>
            </li>
          </ul>

          {/* social-links */}
          <h5 className={`${footerTitleStyles}`}>Follow Us</h5>

          <ul className="mb-4 flex space-x-2">
            <li>
              <NavLink target="_blank" to="/">
                <FaFacebook />
              </NavLink>
            </li>
            <li>
              <NavLink target="_blank" to="/">
                <FaTwitter />
              </NavLink>
            </li>
            <li>
              <NavLink target="_blank" to="/">
                <FaInstagram />
              </NavLink>
            </li>
            <li>
              <NavLink target="_blank" to="/">
                <FaYoutube />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h5 className={`${footerTitleStyles}`}>About</h5>

          <ul className="space-y-2">
            <li>
              <NavLink to="/">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/">Delivery Information</NavLink>
            </li>

            <li>
              <NavLink to="/">Privacy Policy</NavLink>
            </li>

            <li>
              <NavLink to="/">Terms and conditions</NavLink>
            </li>

            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Accounts */}
        <div>
          <h5 className={`${footerTitleStyles}`}>My Account</h5>

          <ul className="space-y-2">
            <li>
              <NavLink to="/">SignIn</NavLink>
            </li>
            <li>
              <NavLink to="/">View Cart</NavLink>
            </li>
            <li>
              <NavLink to="/">My Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/">Track My Order</NavLink>
            </li>
            <li>
              <NavLink to="/">Help</NavLink>
            </li>
          </ul>
        </div>

        {/* App-details */}
        <div>
          <h5 className={`${footerTitleStyles}`}>Install App</h5>

          <p className="mb-2">From App Store or Google play</p>

          <div className="mb-2">
            <NavLink
              className="border border-white px-2 py-4"
              type="button"
              role="button"
              target="_blank"
              to="/"
            >
              App store
            </NavLink>

            <NavLink
              className="border border-white px-2 py-4"
              type="button"
              role="button"
              target="_blank"
              to="/"
            >
              PlayStore
            </NavLink>
          </div>

          <p className="mb-2">Secured Payment Gateways</p>

          <img src={`${Cards}`} alt="cards-alt" />
        </div>
        {/* footer-links */}
      </Container>

      <Container className="flex items-center justify-center py-5">
        <p className="text-center">
          Copyright &copy; 2023 - All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
