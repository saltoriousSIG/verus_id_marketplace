import { useRouteData } from "solid-start";
import { sortStore } from "~/stores";
import ListingCard from "~/components/ListingCard/ListingCard";
import { createResource, For } from "solid-js";
import axios from "axios";
import generatePayload from "~/utils/generatePayload";
import Sort from "~/components/Sort/Sort";
import { createMemo } from "solid-js";

export function routeData() {
  const [ids] = createResource(async () => {
    try {
      const { data: vrsc_id_data } = await axios.post(
        import.meta.env.VITE_SOLID_APP_RPC_URL,
        generatePayload("getoffers", ["VRSC", "true", "false"]),
        {
          headers: {
            ["Content-Type"]: "application/json",
          },
        }
      );

      const { result } = vrsc_id_data;

      const keys = Object.keys(result);
      const targetKey = keys.find((k: string) => {
        return k.startsWith("ids_for_currency");
      });
      if (!targetKey) throw new Error("key not found");
      return result[targetKey];
    } catch (e: any) {
      return e.message;
    }
  });
  const [block] = createResource(async () => {
    try {
      const { data: block_hash } = await axios.post(
        import.meta.env.VITE_SOLID_APP_RPC_URL,
        generatePayload("getbestblockhash", []),
        {
          headers: {
            ["Content-Type"]: "application/json",
          },
        }
      );
      const { result: hash } = block_hash;

      const { data: block_data } = await axios.post(
        import.meta.env.VITE_SOLID_APP_RPC_URL,
        generatePayload("getblock", [hash]),
        {
          headers: {
            ["Content-Type"]: "application/json",
          },
        }
      );

      const { result } = block_data;
      return result;
    } catch (e: any) {
      return e.message;
    }
  });
  return { ids, block };
}

export default function Home() {
  const { ids } = useRouteData<typeof routeData>();
  if (typeof ids() === "string")
    return <div>There was an issue fetching the ids!</div>;

  const { store } = sortStore;

  const listings = createMemo(() => {
    const direction = store.currentSelection[1];
    const _ids = ids() || [];
    switch (store.currentSelection[0]) {
      case "priceSortDirection":
        if (direction === "ASC") {
          return _ids.slice().sort((a: any, b: any) => a.price - b.price);
        } else if (direction === "DSC")
          return _ids.slice().sort((a: any, b: any) => b.price - a.price);
        break;
      case "expirySortDirection":
        if (direction === "ASC") {
          return _ids
            .slice()
            .sort(
              (a: any, b: any) => a.offer.blockexpiry - b.offer.blockexpiry
            );
        } else if (direction === "DSC")
          return _ids
            .slice()
            .sort(
              (a: any, b: any) => b.offer.blockexpiry - a.offer.blockexpiry
            );
    }
  });

  return (
    <main>
      <div style="display:flex; flex-direction:column;">
        <div>
          <Sort />
        </div>
        <div class="container">
          <For each={listings()}>
            {(vrscid) => (
              <ListingCard
                name={vrscid.offer.offer.name}
                currency={"VRSC"}
                price={vrscid.price}
                expires={vrscid.offer.blockexpiry}
              />
            )}
          </For>
        </div>
      </div>
    </main>
  );
}
