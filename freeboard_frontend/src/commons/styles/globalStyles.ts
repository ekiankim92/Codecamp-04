import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  /* font-family: "myFont"; */

  @font-face {
    font-family: "myFont";
    src: url("/fonts/scifibit.ttf");
  }

  @font-face {
    font-family: "Fuzzy Bubbles";
    src: url("/fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap");
  }
`;
