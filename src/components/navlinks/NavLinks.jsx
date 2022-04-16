import React from "react";
import PropTypes from "prop-types";
import CustomNavLink from "../customnavlink/CustomNavLink";
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
} from "../../assets/images";
const NavLinks = ({ links }) => {
  return (
    <nav>
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
      </ul>
    </nav>
  );
};

NavLinks.propTypes = {};

export default NavLinks;
