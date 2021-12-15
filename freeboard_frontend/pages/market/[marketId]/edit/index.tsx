import Product from "../../../../src/components/units/market/product/Product.container";
import MarketQuestionListUIItem from "../../../../src/components/units/market/marketQuestion/list/MarketQuestionList.presenterItem";
import MarketQuestionWriteUI from "../../../../src/components/units/market/marketQuestion/write/MarketQuestionWrite.presenter";
import { createContext } from "react";

export const MyContext = createContext({});

export default function EditPage() {
  const myValues = {
    isEdit: true,
  };

  return (
    <>
      <MyContext.Provider value={myValues}>
        <Product />
        <MarketQuestionWriteUI />
        <MarketQuestionListUIItem />
      </MyContext.Provider>
    </>
  );
}
