import { createMemo, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import * as dateMath from "date-arithmetic";
import { Typography } from "./Expires.styles";

import { routeData } from "~/routes";

type ExpiresType = {
  expires: number;
};

export function Expires(props: ExpiresType) {
  const { expires } = props;
  const { block } = useRouteData<typeof routeData>();

  const timeExpires = createMemo(() => {
    console.log(expires);
    const { height } = block();
    console.log(height);
    const difference = expires - height;
    const time_in_minutes = difference * 1;
    return dateMath.add(new Date(), time_in_minutes, "minutes").toDateString();
  });

  console.log(timeExpires());
  return (
    <div class="container">
      <Typography>Expires: {timeExpires()}</Typography>
    </div>
  );
}
