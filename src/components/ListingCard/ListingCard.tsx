import { createSignal, createMemo } from "solid-js";
import {
  Typography,
  CardInfo,
  Card,
  AdditionalInfo,
  CardTitle,
  Link,
} from "./ListingCard.style";
import { Expires } from "../Expires/Expires";
import {
  getidentityInfo,
  getIdentityContent,
  getIdentityHistory,
} from "./ListingCard.server";
import { useRouteData } from "solid-start";
import { routeData } from "~/routes";
import Skeleton from "../Skeleton/Skeleton";

type CardProps = {
  iid: string;
  name: string;
  currency: string;
  price: number;
  expires: number;
};

const flags: Record<string, string | null> = {
  "8000": " 🚩 Revoked",
  "4": "🏁 Tokenized ID Control",
  "2": "🏴 Flag Locked",
  "1": "🏳️ Has Issued Currency",
  "0": null,
};

export default function ListingCard(props: CardProps) {
  const { iid, name, currency, price, expires } = props;
  const { block } = useRouteData<typeof routeData>();
  const [isExpanded, setIsExpanded] = createSignal();
  const [identityData, setIdentityData] = createSignal<any>();
  const handleClick = () => {
    setIsExpanded(!isExpanded());
    if (isExpanded()) {
      getidentityInfo(iid, block()).then((data) => {
        setIdentityData(data);
      });
    }
  };
  const id = createMemo(() => {
    if (!identityData()) return null;
    const { height } = block() || {};
    const { blockheight } = identityData() || {};
    const num_blocks_since_created = height - blockheight;
    const approx_num_days_since_created = Math.floor(
      num_blocks_since_created / 1440
    );
    return {
      id: iid,
      created: approx_num_days_since_created,
      revocationauthority:
        identityData()?.identity.revocationauthority === iid
          ? "Self"
          : identityData()?.identity.revocationauthority,
      recoveryauthority:
        identityData()?.identity.recoveryauthority === iid
          ? "Self"
          : identityData()?.identity.recoveryauthority,
      flags: flags[identityData()?.identity.flags.toString(16)],
      canspendfor: identityData()?.canspendfor,
      cansignfor: identityData()?.cansignfor,
    };
  });

  return (
    <Card
      class={`card ${isExpanded() ? "card--expanded" : ""}`}
      onClick={handleClick}
    >
      <CardInfo>
        <CardTitle value={name}>{name}</CardTitle>
        <Typography>Price: {price} VRSC</Typography>
        <Expires expires={expires} />
      </CardInfo>
      {isExpanded() ? (
        !id() ? (
          <AdditionalInfo>
            <Skeleton type={"text"} />
          </AdditionalInfo>
        ) : (
          <AdditionalInfo>
            <Typography size={14} weight={300}>
              Listed: ~{id()?.created} days ago
            </Typography>
            <Typography size={14} weight={300}>
              Revocation Authority: {id()?.revocationauthority}
            </Typography>
            <Typography size={14} weight={300}>
              Recovery Authority: {id()?.recoveryauthority}
            </Typography>
            {id()?.flags && (
              <Typography size={14} weight={300}>
                Flags: {id()?.flags}
              </Typography>
            )}
            <Link
              href={`https://verus.io/verusid-lookup/${name}@`}
              target="_blank"
            >
              View profile
            </Link>
          </AdditionalInfo>
        )
      ) : null}
    </Card>
  );
}
