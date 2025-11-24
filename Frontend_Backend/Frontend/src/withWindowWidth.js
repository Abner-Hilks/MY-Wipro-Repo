import React, { useEffect, useState } from "react";

// HOC that injects windowWidth prop into WrappedComponent
function withWindowWidth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <WrappedComponent {...props} windowWidth={windowWidth} />;
  };
}

export default withWindowWidth;
