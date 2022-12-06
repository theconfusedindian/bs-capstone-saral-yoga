// import of styling
import "./Footer.scss";

// Import of SVG Images
import Insta from "../../assets/icons/Icon-instagram.svg";
import FB from "../../assets/icons/Icon-facebook.svg";
import Twitter from "../../assets/icons/Icon-twitter.svg";

export default function Footer() {
  return (
    <div className="siteFooter">
      <div className="siteFooter__title">
        <h1>Get in touch</h1>
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
      </div>
      <div className="siteFooter__contact">
        <p className="siteFooter__contact--yogi">Yogi Harpreet Vohra</p>
        <p className="siteFooter__contact--address">304-1260 Nelson St</p>
        <p className="siteFooter__contact--address">Vancouver BC V6E 1J7</p>
        <p className="siteFooter__contact--email">yogi.harpreet@gmail.com</p>
        <p className="siteFooter__contact--phone">+1 (604) 721-6322</p>
      </div>
      <ul className="siteFooter__other">
        <li className="siteFooter__other--item">Research</li>
        <li className="siteFooter__other--item">Carers</li>
        <li className="siteFooter__other--item">Blog</li>
        <li className="siteFooter__other--item">Donate</li>
      </ul>
      <div className="siteFooter__credits">
        <p className="siteFooter__credits--cr">©2022 Saral-Yoga</p>
        <p className="siteFooter__credits--cr">Privacy Policy</p>
      </div>
    </div>
  );
}
