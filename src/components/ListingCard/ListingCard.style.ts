import { styled } from "solid-styled-components";

export const Card = styled("div")`
  background: rgb(6, 64, 75, 0.9);
  border-radius: 10px;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.1),
    0px 10px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.8s ease-in-out;
  color: white;
  margin: 10px 20px;
  border-radius: 10px;
  padding: 25px;
  width: 175px;
  height:125px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  &.card--expanded {
    height: 400px;
    width: 235px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 30px 18px rgba(0, 0, 0, 0.1),
      0px 22px 22px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
`;

export const CardInfo = styled("div")`
  order: 1;
`;

export const CardTitle = styled('h2')`
  color: #1a202c;
  font-weight: bold;
  font-size: 25px;
  margin: 0;
  margin-bottom: 10px;
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

export const AdditionalInfo = styled('div')`
  grid-column: span 2;
  color: #4a5568;
  display: none;
  transition: all 1.3s ease-in-out;
  overflow: hidden;

  &.card--expanded {
  }
`;
