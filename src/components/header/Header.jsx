import PropTypes from "prop-types";
import Logo from "../logo/Logo";
import { linkedInLogo } from "../../assets/images";
import Search from "../search/Search";
import NavLinks from "../navlinks/NavLinks";

const Header = (props) => {
  return (
    <header className="px-6 fixed w-full top-0 z-[500] flex items-center bg-white shadow-sm">
      <div className="flex mx-[5px] flex-grow flex-shrink-0 items-center lg:mx-auto lg:max-w-[1128px]">
        <Logo imgSrc={linkedInLogo} alt={"linkedin-logo"} link={"linkedin"} />
        <Search />
        <NavLinks />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
