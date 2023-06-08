import { styled } from "solid-styled-components";

export const NavbarContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: rgba(19, 130, 119, 0.9);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  margin: 10px;
`;
export const SiteLogo = styled("img")`
  height: 50px;
  width: auto;
`;

export const SiteName = styled("div")`
  font-size: 20px;
  font-weight: 700;
`;

export const SiteTitle = styled("div")`
  font-weight: 600;
  text-align: center;
  padding: 14px 16px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  background:linear-gradient(45deg, #7795A1, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;

export const SiteSubTitle = styled("div")`
  font-size: 16px;
  font-weight: 500;
`;

export const Details = styled("div")`
  display: flex;
  align-items: center;
`;

export const CoffeeButton = styled("button")`
  background-color: #ff813f;
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
