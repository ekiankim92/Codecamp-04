import Product from "../../../../src/components/units/market/product/Product.container";
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
      </MyContext.Provider>
    </>
  );
}
