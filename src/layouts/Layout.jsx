import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="max-w-[900px] mx-3 md:mx-auto my-10">{children}</main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
