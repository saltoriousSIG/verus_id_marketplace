import {styled} from 'solid-styled-components';

export const Typography = styled("p")`
  color: #fff;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-size: ${(props: any) => props.size}px;
  font-weight: ${(props: any) => props.weight};
`;
