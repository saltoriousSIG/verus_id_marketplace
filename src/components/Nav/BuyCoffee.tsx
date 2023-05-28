import { styled } from "solid-styled-components";

export const Button = styled("button")`
  background-color: rgb(48,100,211);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffa364;
  }
`;

export default function BuyCoffee() {
  return (
    <div class="container">
      <Button>Buy me a coffee</Button>
    </div>
  );
}
