import PropTypes from "prop-types";

const Logo = ({ imgSrc, link, alt }) => {
  return (
    <a className="mr-4" href={`https://www.${link}.com`}>
      <img className="max-w-none w-10" src={imgSrc} alt={alt} />
    </a>
  );
};

Logo.propTypes = {};

export default Logo;
