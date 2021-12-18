import * as S from "./Myorder.styles";
import { getDate } from "../../../../commons/libraries/utils";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";

export default function MyOrderUI(props) {
  return (
    <>
      <h1>Items Sold</h1>
      <div>
        <div>
          <span>Date</span>
          <span>Product Name</span>
          <span>Seller</span>
          <span>Price</span>
        </div>
        <br />
        {props.data?.fetchUseditemsISold.map((el) => (
          <div key={uuidv4()}>
            <span>{getDate(el.createdAt)}</span>
            <span>{el.name}</span>
            <span>{el.seller.name}</span>
            <span>{el.price}</span>
          </div>
        ))}
      </div>
      <PaginationsPage01
        refetch={props.refetch}
        startPage={props.startPage}
        setStartPage={props.setStartPage}
        count={props.count}
      />
      ===================================================
      <h1>Items Bought</h1>
      <div>
        <div>
          <span>Date</span>
          <span>Product Name</span>
          <span>Seller</span>
          <span>Price</span>
        </div>
        <div>
          {props.dataItemsBought?.fetchUseditemsIBought.map((el) => (
            <div key={uuidv4()}>
              <span>{getDate(el.createdAt)}</span>
              <span>{el.name}</span>
              <span>{el.seller.name}</span>
              <span>{el.price}</span>
            </div>
          ))}
        </div>
        <PaginationsPage01
          refetchBoughtItems={props.refetchBoughtItems}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          count2={props.count}
        />
      </div>
    </>
  );
}
