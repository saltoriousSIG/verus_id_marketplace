import { createSignal } from "solid-js";
import "./ListingCard.module.scss";
import { Typography, CardInfo, Card, AdditionalInfo, CardTitle, CardBody } from "./ListingCard.style";
import { Expires } from "../Expires/Expires";

type CardProps = {
  name: string;
  currency: string;
  price: number;
  expires: number;
};

export default function ListingCard(props: CardProps) {
  const { name, currency, price, expires } = props;
  const [isExpanded, setIsExpanded] = createSignal();
  const handleClick = () => {

    setIsExpanded(!isExpanded());
  }
  const description = ''
  return (
    <Card
      class={`card ${isExpanded() ? "card--expanded" : ""}`}
      onClick={handleClick}
    >
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <Typography>Price: {price} VRSC</Typography>
        <Expires expires={expires} />
      </CardInfo>

      {isExpanded() ? (
        <AdditionalInfo>
          <Typography>{description}</Typography>
        </AdditionalInfo>
      ) : null}
    </Card>
  );
}
