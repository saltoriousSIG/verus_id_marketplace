import Sort from "../Sort/Sort";
import Search from "../Search/Search";
import { SubNavBar } from "./SubNav.style";

type SubNavType = {
  listing: any
}

export default function SubNav(props: SubNavType) {
  const { listing } = props;
  return (
    <SubNavBar>
      <div class="filter-toggle">
        <Sort />
      </div>
      <div style='display: flex; align-items: baseline; justify-content:center;' class="search-bar">
        <Search ids={listing} />
      </div>
    </SubNavBar>
  );
}
