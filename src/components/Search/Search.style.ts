import { styled } from "solid-styled-components";
import { breakpoints } from "~/utils/breakpoints";

export const Input = styled("input")`
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #888;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  transition: 0.3s;
  &::placeholder {
    color: azure;
  }
  &:focus {
    border-bottom: 2px solid #5f87d3;
    outline: none;
  }

  @media (max-width: ${breakpoints.mobile.max}px) {
    width: 150px;
  }
`;

export const SearchContainer = styled("div")`
  margin: 0 8px;
  @media (max-width: ${breakpoints.mobile.max}px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;
