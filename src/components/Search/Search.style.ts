import { styled } from "solid-styled-components";

export const Input = styled("input")`
  width: 25%;
  padding: 10px 20px;
  margin: 8px 0;
  margin-bottom: 25px;
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
`;
