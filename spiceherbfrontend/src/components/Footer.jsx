import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faChess, faChessKing, faHamburger, faHome, faPeopleGroup, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer
        className="footer section has-bg-image text-center"
        style={{ backgroundImage: "url('./assets/images/footer-bg.jpg')" }}
      >
        <div className="container">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              <a href="#" className="logo">
                <img
                  src="/images/logo.png"
                  width="160"
                  height="50"
                  loading="lazy"
                  alt="grilli home"
                />
              </a>

              <address className="body-4">
                Restaurant St, Delicious City, London 9578, UK
              </address>

              <a
                href="mailto:booking@grilli.com"
                className="body-4 contact-link"
              >
                booking@grilli.com
              </a>

              <a href="tel:+88123123456" className="body-4 contact-link">
                Booking Request : +88-123-123456
              </a>

              <p className="body-4">Open : 09:00 am - 01:00 pm</p>

              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>

              <p className="title-1">Get News & Offers</p>

              <p className="label-1">
                Subscribe us & Get <span className="span">25% Off.</span>
              </p>

              <form action="" className="input-wrapper">
                <div className="icon-wrapper">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                  <input
                    type="email"
                    name="email_address"
                    placeholder="Your email"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>

                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Subscribe</span>

                  <span className="text text-2" aria-hidden="true">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>

            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faHome} className='font-footer'/>
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faBars} className='font-footer'/>
                  Menus
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faPeopleGroup} className='font-footer'/>
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faChessKing} className='font-footer'/>
                  Our Chefs
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faPhone} className='font-footer'/>
                  Contact
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  <FontAwesomeIcon icon={faFacebook} className='font-footer'/>
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  <FontAwesomeIcon icon={faInstagram} className='font-footer'/>
                  Instagram
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faTwitter} className='font-footer'/>
                  Twitter
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faYoutube} className='font-footer'/>
                  Youtube
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                <FontAwesomeIcon icon={faGoogle} className='font-footer'/>
                  Google Map
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2022 Grilli. All Rights Reserved | Crafted by{" "}
              <a
                href="https://github.com/codewithsadee"
                target="_blank"
                className="link"
              >
                codewithsadee
              </a>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer