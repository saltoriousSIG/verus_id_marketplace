import { searchStore } from "~/stores";
import { debounce } from "@solid-primitives/scheduled";
import { Input } from "./Search.style";

type SearchProps = {
  ids: any[];
};

let ref: HTMLInputElement;

export default function Search(props: SearchProps) {
  const { ids } = props;

  const { setValue, searchIds, setToggleFuzzySearch } = searchStore;
  const trigger = debounce(() => searchIds(ids), 300);

  const handleCheck = () => { 
    setToggleFuzzySearch(ref);
  }

  return (
    <div style="margin-bottom: 25px;">
      <Input
        placeholder="Search for an ID"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          trigger();
        }}
      />
      <div>
        <label style='margin: 0 8px;'>Enable Fuzzy Search</label>
        <input ref={ref} type='checkbox' onChange={handleCheck} />
      </div>
    </div>
  );
}
