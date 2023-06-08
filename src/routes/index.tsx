import { useRouteData } from "solid-start";
import { sortStore, searchStore } from "~/stores";
import ListingCard from "~/components/ListingCard/ListingCard";
import { createResource, For } from "solid-js";
import Sort from "~/components/Sort/Sort";
import { createMemo } from "solid-js";
import Search from "~/components/Search/Search";
import fetchRpcUrl from "~/utils/fetchRpcUrl";
import fetchOffers from "~/utils/data-utils/fetchOffers";
import fetchBlockInfo from "~/utils/data-utils/fetchBlockInfo";

const { rpc_url, fallback } = fetchRpcUrl();

export function routeData() {
  const [ids] = createResource(async () => {
    try {
      return await fetchOffers(rpc_url);
    } catch (e: any) {
      if (fallback) {
        try {
          return await fetchOffers(fallback);
        } catch(e: any){
          return e.message;
        }
      } 
      return e.message;
    }
  });
  const [block] = createResource(async () => {
    try {
      return await fetchBlockInfo(rpc_url);
    } catch (e: any) {
      if (fallback) {
        try {
          return await fetchBlockInfo(fallback);
        } catch(e: any) {
          return e.message;
        }
      }
      return e.message;
    }
  });
  return { ids, block };
}

export default function Home() {
  const { ids, block } = useRouteData<typeof routeData>();
  if (typeof ids() === "string")
    return <div>There was an issue fetching the ids!</div>;

  const { store } = sortStore;
  const { store: search_store } = searchStore;

  const listings = createMemo(() => {
    const direction = store.currentSelection[1];
    let _ids = search_store.ids ? search_store.ids : ids() || [];

    if (search_store.ids) {
      if (search_store.ids.length === 0) {
        _ids = ids() || [];
      } else {
        _ids = search_store.ids;
      }
    } else {
      _ids = ids() || [];
    }
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
          <Search ids={listings()} />
        </div>
        <div class='container' style='justify-content: flex-start'>
          <h1 style="font-size: 35px; margin:unset; font-weight:400; margin-left: 3%; margin-bottom: 15px;">Current Block: {block()?.height}</h1>
        </div>
        <div class="container"  style='justify-content: center'>
          <For each={listings()}>
            {(vrscid) => (
              <ListingCard
                iid={vrscid.identityid}
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
