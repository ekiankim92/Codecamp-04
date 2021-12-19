import { useEffect, useState } from "react";
import SidebarUI from "./Sidebar.presenter";

export default function Sidebar() {
  const [itemsViewed, setItemsViewed] = useState([]);

  // const onClickItems = () => {
  //   const itemsToday = JSON.parse(localStorage.getItem("items") || "[]");
  //   const newItemsToday = itemsToday.filter((el) => el._id !== id);
  //   localStorage.setItem("items", JSON.stringify(newItemsToday));
  //   setItemsViewed(itemsViewed);
  // };

  // const onClickItemsToday = (el) => {
  //   const itemsToday = JSON.parse(localStorage.getItem("items") || "[]");

  //   const { __typename, ...newEl } = el;
  //   itemsToday.push(newEl);

  //   localStorage.setItem("items", JSON.stringify(itemsToday));
  // };

  // useEffect(() => {
  //   const itemsToday = JSON.parse(localStorage.getItem("items"));
  //   setItemsViewed(itemsToday);
  // }, []);

  // const onClickItemsViewed = async (el) => {
  // alert("testing");
  // const itemsViwed = await JSON.parse(localStorage.getItem("items") || "[]");
  // let isExists = false;
  // itemsViwed.forEach((itemsEl) => {
  //   if (el._id === itemsEl._id) isExists = true;
  // });
  // const { __typename, ...newEl } = el;
  // itemsViwed.push(newEl);
  // localStorage.setItem("items", JSON.stringify(itemsViwed));
  // };

  return (
    <SidebarUI
    // onClickItemsViewed={onClickItemsViewed}
    // itemsViewed={itemsViewed}
    // onClickItemsToday={onClickItemsToday}
    />
  );
}
