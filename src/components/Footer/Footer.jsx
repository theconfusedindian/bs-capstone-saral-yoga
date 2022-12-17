import { Link, useNavigate } from "react-router-dom";

// import of styling
import "./Footer.scss";

// Import of SVG Images
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import Insta from "../../assets/icons/Icon-instagram.svg";
import FB from "../../assets/icons/Icon-facebook.svg";
import Twitter from "../../assets/icons/Icon-twitter.svg";
import Contact from "../Contact-Form/Contact";

export default function Footer() {
  const nav = useNavigate();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendEmail = (mailto) => {
    var mail = "mailto:yogi.harpreet@gmail.com";
    var a = document.createElement("a");
    a.href = mail;
    a.click();
  };

  return (
    <div className="siteFooter">
      <div className="siteFooter__title">
        <h1>
          {/* <Link to={<Contact />}> */}
          Get in touch
          {/* </Link> */}
        </h1>
      </div>
      <div className="siteFooter__social">
        <a href="http://instagram.com">
          <img src={Insta} alt="insta" className="siteFooter__social--icon" />
        </a>
        <a href="http://facebook.com">
          <img src={FB} alt="facebook" className="siteFooter__social--icon" />
        </a>
        <a href="http://twitter.com">
          <img
            src={Twitter}
            alt="twitter"
            className="siteFooter__social--icon"
          />
        </a>
        <img
          src={email}
          className="siteFooter__contact--email"
          onClick={(e) => {
            e.preventDefault();
            sendEmail("yogi.harpreet@gmail.com");
          }}
        />
        <img src={phone} className="siteFooter__contact--phone" />
      </div>

      <div className="siteFooter__other">
        {/* <div className="siteFooter__other--box"> */}
        <div className="siteFooter__other--item">Research</div>
        <div className="siteFooter__other--item">Blog</div>
        {/* </div> */}
        {/* <div className="siteFooter__other--box"> */}
        <div
          className="siteFooter__other--item"
          onClick={(e) => {
            e.preventDefault();
            nav("/wip");
          }}
        >
          Careers
        </div>
        <div className="siteFooter__other--item">Donate</div>
        {/* </div> */}
      </div>
      <div className="siteFooter__credits">
        <p className="siteFooter__credits--cr">©2022 Saral-Yoga</p>
        <button
          type="button"
          className="siteFooter__credits--cr"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = openInNewTab(
              "https://www.privacypolicies.com/live/a4f9814e-f036-4b1a-a1dc-8ca431f9d9aa"
            );
          }}
        >
          Privacy Policy
        </button>
        {/* <p className="siteFooter__credits--cr">Privacy Policy</p> */}
      </div>
    </div>
  );
}
