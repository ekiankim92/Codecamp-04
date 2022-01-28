import { ChangeEvent } from "react";

export interface IPropsBasketUI {
  el?: any;
  basketItems: any;
  onClickDelete: (id: string) => () => void;
  onError?: (event: ChangeEvent<HTMLImageElement>) => void;
}
