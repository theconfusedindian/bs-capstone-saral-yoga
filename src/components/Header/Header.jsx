import logo from "../../assets/icons/Vector.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="site-header">
      <Link to={"/"}>
        <img className="site-header__logo" src={logo} alt="logo" />
      </Link>

      <h1 className="site-header__title">
        {" "}
        <Link to={"/"}>Saral-Yoga</Link>
      </h1>
    </div>
  );
}
