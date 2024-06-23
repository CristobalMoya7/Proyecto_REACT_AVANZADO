import clsx from "clsx";
import "./Header.css";
import { ReactComponent as Icon } from "../assets/svgImage.svg";
import AuthButton from "./AuthButton";
import { Link, NavLink } from "react-router-dom";

export default function Header({ className }) {
  return (
    <header className={clsx("header", className)}>
      <Link to="/v1/adverts">
        <div className="header-logo">
          <p>
            <Icon width={52} hegith={50} fill="blue" text="Wallapop" />
            Walla
          </p>
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink to="/v1/adverts" end>
          Adverts
        </NavLink>
        <NavLink to="/v1/adverts/new" end>
          Create a new advert
        </NavLink>
        <AuthButton className="header-button"></AuthButton>
      </nav>
    </header>
  );
}
