import {
  NavbarContainer,
  SiteName,
  SiteTitle,
  SiteLogo,
  Details,
  CoffeeButton,
} from "./Nav.style";

export default function Nav() {

  return (
    <NavbarContainer>
      <SiteTitle>Verus IDS</SiteTitle>
      <Details>
        <CoffeeButton>Buy me a coffee</CoffeeButton>
      </Details>
    </NavbarContainer>
  );
}
