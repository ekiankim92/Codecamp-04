import { Sidebar } from "./Sidebar.styles";
import { Breadcrumb, Menu } from "antd";

export default function SidebarUI(props) {
  return (
    <>
      <Sidebar>Items Veiwed Today</Sidebar>
      {/* {props.itemsViewed.map((el) => (
        <div>
          <div>Seller: {el.seller.name}</div>
          <img src={`https://storage.googleapis.com/${el.images[0]}`} />
        </div>
      ))} */}
    </>
  );
}
