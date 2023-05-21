import { Global, css } from "@emotion/react";
import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css({
  html: {
    fontFamily: "Pretendard",
    height: "100%",
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
