import React from "react";
import PropTypes from "prop-types";
import CustomNavLink from "../customnavlink/CustomNavLink";
import ExtraOptionsButton from "../extraoptionsbutton/ExtraOptionsButton";
import DropDown from "../dropdown/DropDown";
import {
  userGroupNotActive,
  userGroupActive,
  homeActive,
  homeNotActive,
  messageActive,
  messageNotActive,
  caseActive,
  caseNotActive,
  bell,
  gridActive,
  gridNotActive,
  user,
} from "../../assets/images";

const NavLinks = ({ links }) => {
  return (
    <nav className="relative">
      <ul className="flex gap-4">
        <li>
          <CustomNavLink
            text={"Home"}
            alt={"feed"}
            imgSrcActive={homeActive}
            imgSrcNotActive={homeNotActive}
            to={"/feed"}
          />
        </li>
        <li>
          <CustomNavLink
            text={"my network"}
            alt={"my network"}
            imgSrcActive={userGroupActive}
            imgSrcNotActive={userGroupNotActive}
            to={"/mynetwork"}
          />
        </li>
        <li>
          <CustomNavLink
            text={"jobs"}
            alt={"jobs"}
            imgSrcActive={caseActive}
            imgSrcNotActive={caseNotActive}
            to={"/jobs"}
          />
        </li>
        <li>
          <CustomNavLink
            text={"messaging"}
            alt={"messaging"}
            imgSrcActive={messageActive}
            imgSrcNotActive={messageNotActive}
            to={"/messaging"}
          />
        </li>
        <li>
          <CustomNavLink
            text={"notifications"}
            alt={"notifications"}
            imgSrcActive={bell}
            imgSrcNotActive={bell}
            to={"/notifications"}
          />
        </li>
        <li>
          <ExtraOptionsButton
            handlerName="me-dropdown"
            text="me"
            imgSrc={user}
          />
        </li>
        <li>
          <ExtraOptionsButton text="work" imgSrc={gridActive} />
        </li>
      </ul>
      <DropDown
        handlerName={"me-dropdown"}
        className="absolute bg-white rounded-md shadow-sm  h-28 w-28 right-[60px] mt-2 p-5 flex items-center justify-center"
      >
        <div>koko</div>
      </DropDown>
    </nav>
  );
};

NavLinks.propTypes = {};

export default NavLinks;
