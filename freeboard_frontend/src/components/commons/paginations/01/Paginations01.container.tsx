import { useState } from "react";
import Paginations01UI from "./Paginations01.presenter";

export default function PaginationsPage01(props) {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  function onClickPage(event) {
    if (!event.target.id) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (props.startPage <= 1) {
      return;
    }
    setActivedPage(props.startPage - 10);
    props.setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) {
      return;
    }
    setActivedPage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  }
  // console.log(props.startPage);
  // console.log(lastPage);

  return (
    <>
      <Paginations01UI
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        activedPage={activedPage}
        lastPage={lastPage}
        startPage={props.startPage}
      />
    </>
  );
}
