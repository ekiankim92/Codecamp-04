import { IPropsPaginations01UI } from "./Paginations01.types";
import { Page } from "./Paginations01.styles";

export default function Paginations01UI(props: IPropsPaginations01UI) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>Previous</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>Next</Page>
    </div>
  );
}
