export interface IPropsBasketUI {
  el?: any;
  basketItems: any;
  onClickDelete: (id: string) => () => void;
}
