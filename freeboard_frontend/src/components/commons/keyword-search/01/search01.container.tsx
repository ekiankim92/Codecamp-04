import SearchUI from "./search01.presenter";
import _ from "lodash";
import { ISearch01Props } from "./search01.types";
import { ChangeEvent } from "react";

export default function Search01(props: ISearch01Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    {
      props.refetchBoardsCount && props.refetchBoardsCount({ search: data });
    }
    props.onChangeSearch(data);
  }, 1000);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <SearchUI onChangeSearchbar={onChangeSearchbar} />
    </>
  );
}
