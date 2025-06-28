import React from "react";
import PropTypes from "prop-types";

const Container = ({
  children,
  size = "lg",
  className = "",
  as: Component = "div",
  ...rest
}) => {
  // Base padding for mobile
  const basePadding = "px-4 py-8";

  // Size variants
  const sizeVariants = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "max-w-full",
  };

  // Responsive padding
  const responsivePadding = `${basePadding} sm:px-6 sm:py-10 md:px-8 md:py-12  lg:px-10 lg:py-14`;

  return (
    <Component
      className={`mx-auto ${sizeVariants[size]} ${responsivePadding} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Container;
