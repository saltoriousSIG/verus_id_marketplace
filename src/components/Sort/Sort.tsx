import { SortContainer, SortButton } from "./Sort.style";
import { sortStore } from "~/stores";
import { SortDirections } from "~/stores/sort.stores";

export default function Sort() {
  const { store, getDirection, setDirection, updateSelectedValue } = sortStore;

  const handleClick = (type: string) => {
    setDirection(getDirection(store[type] as SortDirections), type);
    updateSelectedValue(`${type}_${store[type]}`); 

    const hightlightedClasses = document.getElementsByClassName('highlight');
    
    for (let e of hightlightedClasses) {
      e.classList.remove('highlight');
    } 

    const element = document.getElementById(type);
    element?.classList.add('highlight');
  };

  return (
    <SortContainer>
      <SortButton
        class="highlight"
        id="priceSortDirection"
        onClick={() => handleClick("priceSortDirection")}
      >
        Sort by price: <span id="price-order">{store.priceSortDirection}</span>
      </SortButton>

      <SortButton
        id="expirySortDirection"
        onClick={() => handleClick("expirySortDirection")}
      >
        Sort by expiry time:{" "}
        <span id="expiry-order">{store.expirySortDirection}</span>
      </SortButton>
    </SortContainer>
  );
}
