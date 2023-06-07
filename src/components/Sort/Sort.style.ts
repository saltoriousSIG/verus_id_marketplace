import { styled } from "solid-styled-components";

export const SortContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  max-width: 25%;
  margin: auto;
`;

export const SortButton = styled("button")`
  cursor: pointer;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
  white-space: nowrap;
  text-align: center;
  transition: background-color 0.3s ease;
  border-style: none;
  &:hover {
    background-color: #e0e0e0;
  }
  &.highlight {
   background: linear-gradient(to right, #134e5e, #71b280);
   color: azure;
  }
`;
