import { createSignal } from "solid-js";
import "./ListingCard.module.scss";
import { Typography, Card, CardBody } from "./ListingCard.style";
import { Expires } from "../Expires/Expires";

type CardProps = {
  name: string;
  currency: string;
  price: number;
  expires: number;
};

export default function ListingCard(props: CardProps) {
  const { name, currency, price, expires } = props;
  return (
    <Card>
      <CardBody>
        <Typography size={14} weight={300}>
          {price} {currency}
        </Typography>

        <Typography size={25} weight={500}>
          {name}
        </Typography>

        <Expires expires={expires} />
      </CardBody>
    </Card>
  );
}
