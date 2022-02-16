import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { IPropsPaginationsPage01 } from "./Paginations01.types";

export default function PaginationsPage01(props: IPropsPaginationsPage01) {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    // @ts-ignore:next-line
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (props.startPage <= 1) {
      return;
    }
    setActivedPage(props.startPage - 10);
    props.setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
    if (props.startPage + 10 > lastPage) {
      return;
    }
    setActivedPage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  };

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
