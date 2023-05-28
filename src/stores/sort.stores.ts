import { createStore } from "solid-js/store";

export type SortDirections = "ASC" | "DSC";

type Store = {
  selectedValue: string;
} & Record<string, SortDirections | string>

// Initialize your store with some default values
const [store, setStore] = createStore<Store>({
  priceSortDirection: "ASC",
  expirySortDirection: "DSC",
  selectedValue: 'priceSortDirection_ASC',
  get currentSelection() {
    return this.selectedValue.split('_');
  }
});

const getDirection = (input: SortDirections) => {
  switch (input) {
    case "ASC":
      return "DSC";
    case "DSC":
      return "ASC";
  }
};

const updateSelectedValue = (selectedValue: string) => {
  setStore({
    selectedValue
  })
}

const setDirection = (newDirection: SortDirections, type: string) => {
  setStore({
    [type]: newDirection
  });
} 

// Export store and functions to interact with it

export default { store, getDirection, setDirection, updateSelectedValue };
