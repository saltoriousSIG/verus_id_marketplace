import { styled } from "solid-styled-components";

export const Card = styled("div")`
  background: rgb(6,64,75,0.9);
  border-radius: 10px;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.1),
    0px 10px 10px rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
  margin:10px 20px;
  width: 300px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 30px 18px rgba(0, 0, 0, 0.1),
      0px 22px 22px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
`;

export const CardBody = styled("div")`
  padding: 20px;
  text-align: center;
`;

export const Typography = styled("p")`
  color: white;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-size: ${(props: any) => props.size}px;
  font-weight: ${(props: any) => props.weight};
`;
