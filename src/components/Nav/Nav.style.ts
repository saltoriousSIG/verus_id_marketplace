import {styled} from 'solid-styled-components';

export const NavbarContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: rgba(19,130,119,0.9);
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  height: 60px;
`;
export const SiteLogo = styled("img")`
  height:50px;
  width: auto;
`;

export const SiteName = styled("div")`
  font-size: 20px;
  font-weight: 700;
`;

export const SiteTitle = styled("div")`
  font-size: 24px;
  font-weight: 500;
`;

export const Details = styled("div")`
  display: flex;
  align-items: center;
`;

export const CoffeeButton = styled("button")`
  background-color: #FF813F;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFA364;
  }
`;
