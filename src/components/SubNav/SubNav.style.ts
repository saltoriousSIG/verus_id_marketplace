import { styled } from "solid-styled-components";

import { breakpoints } from "~/utils/breakpoints"; 

export const SubNavBar = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #67b26f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #69909B,
    #65B4A8
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #69909B,
    #65B4A8
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 24px;
  max-height: fit-content;
  max-width: 90%;

  @media (max-width: ${breakpoints.mobile.max}px) {
    flex-direction: column;
    > div {
      padding-bottom: 15px;
    }
  }

`;
