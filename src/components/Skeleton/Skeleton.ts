import { SkeletonTypes } from "./Skeleton.types";

type SkeletonType = "text" | "image" | "text_with_image";

type SkeletonProps = {
  type: SkeletonType;
};

export default function Skeleton(props: SkeletonProps) {
  const { type } = props;
  return SkeletonTypes[type];
}
