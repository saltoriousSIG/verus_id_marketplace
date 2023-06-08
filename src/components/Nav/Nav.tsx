import { NavbarContainer, SiteTitle, SiteSubTitle } from "./Nav.style";
import { createMemo, createSignal } from "solid-js";
import { breakpoints } from "~/utils/breakpoints";

export default function Nav() {
  const [windowSize, setWindowSize] = createSignal<number>();


  return (
    <NavbarContainer>
      <SiteTitle>Verus IDS Listed Now</SiteTitle>
      <SiteSubTitle>Made with ❤️ by Saltorious@</SiteSubTitle>
    </NavbarContainer>
  );
}
