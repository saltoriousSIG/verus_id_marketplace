import { createStore } from "solid-js/store";
import Fuse from "fuse.js";

type Store = {
  value: string;
  ids: any[] | undefined;
  fuzzySearch: boolean;
};

const [store, setStore] = createStore<Store>({
  value: "",
  ids: undefined,
  fuzzySearch: false
});

const setValue = (value: string) => {
  setStore({ value });
};

const searchIds = (ids: any[]) => {
  const options: Record<string, any> = {
    keys: ["offer.offer.name"],
  }
  if (!store.fuzzySearch) { 
    options.threshold = 0;
  } 
  const fuse = new Fuse(ids, options);
  const res = fuse.search(store.value);
  setStore({
    ...store,
    ids: res.map((item) => item.item),
  });
};

const setToggleFuzzySearch = (ref: any) => { 
  setStore({
    ...store,
    fuzzySearch: ref.checked
  })
}

export default { store, setValue, searchIds, setToggleFuzzySearch };
