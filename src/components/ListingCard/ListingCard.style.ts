import { styled } from "solid-styled-components";
function doesntContaineEmoji(str: string) {
  const regex = /^[A-Za-z0-9]+$/;
  return regex.test(str);
}

export const Card = styled("div")`
  background: rgba(6, 64, 75, 0.9);
  border-radius: 10px;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.1),
    0px 10px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.8s ease-in-out;
  color: white;
  margin: 10px 20px;
  border-radius: 10px;
  padding: 25px;
  width: 185px;
  height: 225px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;

  &.card--expanded {
    height: 450px;
    width: 300px;
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

type TitleProps = {
  value: string;
};

export const CardTitle = styled("h2")<TitleProps>`
  background: ${(props) =>
    !doesntContaineEmoji(props.value)
      ? "transparent"
      : "linear-gradient(45deg, #6CAC7E, #fff)"};
  -webkit-background-clip: ${(props) =>
    !doesntContaineEmoji(props.value) ? "unset" : "text"};
  -webkit-text-fill-color: ${(props) =>
    !doesntContaineEmoji(props.value) ? "unset" : "transparent"};
  font-weight: bold;
  font-size: ${(props) =>
    !doesntContaineEmoji(props.value) ? "30px" : "20px"};
  margin: 0;
  margin-bottom: 10px;
`;

export const CardBody = styled("div")`
  padding: 20px;
  text-align: center;
`;

export const Typography = styled("p")`
  color: white;
  font-family: "Lato", sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  white-space: normal;
  font-size: ${(props: any) => props.size}px;
  font-weight: ${(props: any) => props.weight};
  overflow-wrap: anywhere;
`;

export const Link = styled("a")`
  margin: 0;
  &:hover {
    color: #1d847b;
  }
`;

export const AdditionalInfo = styled("div")`
  display: flex;
  color: white;
  margin-top: 20px;
  max-width: 100%;
  flex-direction: column;
  
  > * {
    max-width: 100%;
    padding: 10px !important;
  }
  > * {
    position: relative;
    &:not(:last-child) {
      &::after {
        content: "";
        position: absolute;
        width: 40%;
        transform: translateY(50%);
        height: 20px;
        left: 30%;
        border-bottom: 1px solid #1D847B;
      }
    }
  }
  &.card--expanded {
  }
`;
