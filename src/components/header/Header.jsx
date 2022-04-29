import Logo from "../logo/Logo";
import { linkedInLogo } from "../../assets/images";
import Search from "../search/Search";
import NavItems from "../navitems/NavItems";
import DropDown from "../dropdown/DropDown";
import CustomNavLink from "../customnavlink/CustomNavLink";
import ExtraOptionsButton from "../extraoptionsbutton/ExtraOptionsButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeAll } from "../../redux/slices/toggleSlice";
import {
  bell,
  messageActive,
  messageNotActive,
  user,
  gridActive,
} from "../../assets/images/index";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => dispatch(closeAll()));

    return () => {
      window.addEventListener("resize", () => dispatch(closeAll()));
    };
  }, []);

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
          <DropDown
            handlerName={"options-dropdown"}
            className="absolute bg-white rounded-md shadow-sm mt-2 -right-1 flex items-center "
          >
            <ul className="flex gap-2">
              <li className="flex-shrink-0 xs:hidden">
                <CustomNavLink
                  text={"messaging"}
                  alt={"messaging"}
                  imgSrcActive={messageActive}
                  imgSrcNotActive={messageNotActive}
                  to={"/messaging"}
                  bottomBorder={false}
                />
              </li>
              <li className="flex-shrink-0 xs:hidden ">
                <CustomNavLink
                  text={"notifications"}
                  alt={"notifications"}
                  imgSrcActive={bell}
                  imgSrcNotActive={bell}
                  to={"/notifications"}
                  bottomBorder={false}
                />
              </li>

              <li className="flex-shrink-0 sm:hidden ">
                <ExtraOptionsButton
                  handlerName="me-dropdown"
                  text="me"
                  imgSrc={user}
                  bottomBorder={false}
                />
              </li>
              <li className="flex-shrink-0 sm:hidden ">
                <ExtraOptionsButton
                  handlerName="work-modal"
                  text="work"
                  imgSrc={gridActive}
                  bottomBorder={false}
                />
              </li>
            </ul>
          </DropDown>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
