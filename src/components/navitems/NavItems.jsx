import React from "react";
import PropTypes from "prop-types";
import CustomNavLink from "../customnavlink/CustomNavLink";
import ExtraOptionsButton from "../extraoptionsbutton/ExtraOptionsButton";

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
  user,
  options,
} from "../../assets/images";

const NavItems = ({ items }) => {
  return (
    <>
      <ul className="flex gap-3 sm:gap-6">
        <li className="flex-shrink-0 ">
          <CustomNavLink
            text={"Home"}
            alt={"home"}
            imgSrcActive={homeActive}
            imgSrcNotActive={homeNotActive}
            to={"/feed"}
          />
        </li>
        <li className="flex-shrink-0 ">
          <CustomNavLink
            text={"my network"}
            alt={"my network"}
            imgSrcActive={userGroupActive}
            imgSrcNotActive={userGroupNotActive}
            to={"/mynetwork"}
          />
        </li>
        <li className="flex-shrink-0 ">
          <CustomNavLink
            text={"jobs"}
            alt={"jobs"}
            imgSrcActive={caseActive}
            imgSrcNotActive={caseNotActive}
            to={"/jobs"}
          />
        </li>

        <li className="flex-shrink-0 hidden xs:block">
          <CustomNavLink
            text={"messaging"}
            alt={"messaging"}
            imgSrcActive={messageActive}
            imgSrcNotActive={messageNotActive}
            to={"/messaging"}
          />
        </li>
        <li className="flex-shrink-0  hidden xs:block ">
          <CustomNavLink
            text={"notifications"}
            alt={"notifications"}
            imgSrcActive={bell}
            imgSrcNotActive={bell}
            to={"/notifications"}
          />
        </li>

        <li className="flex-shrink-0 hidden sm:block ">
          <ExtraOptionsButton
            handlerName="me-dropdown"
            text="me"
            imgSrc={user}
          />
        </li>
        <li className="flex-shrink-0 hidden sm:block ">
          <ExtraOptionsButton
            handlerName="work-modal"
            text="work"
            imgSrc={gridActive}
          />
        </li>
        <li className="flex-shrink-0  sm:hidden ">
          <ExtraOptionsButton handlerName="options-dropdown" imgSrc={options} />
        </li>
      </ul>
    </>
  );
};

NavItems.propTypes = {};

export default NavItems;
