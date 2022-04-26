import PropTypes from "prop-types";
import Logo from "../logo/Logo";
import { linkedInLogo } from "../../assets/images";
import Search from "../search/Search";
import NavItems from "../navitems/NavItems";
import DropDown from "../dropdown/DropDown";

const Header = (props) => {
  return (
    <header className="px-6 fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center mx-auto lg:max-w-[1128px] ">
        <Logo imgSrc={linkedInLogo} alt={"linkedin-logo"} link={"linkedin"} />
        <Search />
        <nav className="relative">
          <NavItems />
          <DropDown
            handlerName={"me-dropdown"}
            className="absolute bg-white rounded-md shadow-sm  h-28 w-28 right-[60px] mt-2 p-5 flex items-center justify-center"
          >
            <div>koko</div>
          </DropDown>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
