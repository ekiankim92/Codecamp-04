export default function Paginations01UI(props) {
  return (
    <div>
      <span onClick={props.onClickPrevPage}>Previous</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <span
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={props.startPage + index}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {props.startPage + index}
            </span>
          )
      )}
      <span onClick={props.onClickNextPage}>Next Page</span>
    </div>
  );
}
