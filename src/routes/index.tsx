import { useRouteData } from "solid-start";
import ListingCard from "~/components/ListingCard/ListingCard";
import { createResource, For } from "solid-js";
import axios from "axios";
import generatePayload from "~/utils/generatePayload";

export function routeData() {
  const [ids] = createResource(async () => {
    try {
      const { data: vrsc_id_data } = await axios.post("http://157.230.91.189:8000", generatePayload('getoffers',["VRSC", "true", "false"]), {
        headers: {
          ["Content-Type"]: "application/json",
        },
      });

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
  const [block] = createResource(async() => {

    try{
      const { data: block_hash } = await axios.post("http://157.230.91.189:8000", generatePayload('getbestblockhash',[]), {
        headers: {
          ["Content-Type"]: "application/json",
        },
      });
      const { result: hash } = block_hash;

      const { data: block_data } = await axios.post("http://157.230.91.189:8000", generatePayload('getblock',[hash]), {
        headers: {
          ["Content-Type"]: "application/json",
        },
      });

      const { result } = block_data;

      return result;

    } catch(e:any){
      return e.message;
    }
  })
  return { ids, block };
}

export default function Home() {
  const { ids } = useRouteData<typeof routeData>();
  console.log(ids());
  if (typeof ids() === "string")
    return <div>There was an issue fetching the ids!</div>;
  return (
    <main>
      <div class="container">
        <For each={ids()}>
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
    </main>
  );
}
