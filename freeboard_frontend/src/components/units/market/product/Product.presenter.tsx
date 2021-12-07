import * as S from "./Product.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Product.validations";
import { useContext } from "react";
import { MyContext } from "../../../../../pages/market/[marketId]/edit";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

export default function ProductUI(props) {
  // useForm product submit
  const { handleSubmit, register, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { isEdit } = useContext(MyContext);

  // React Quill textarea
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(
          isEdit ? props.onClickProductUpdate : props.onClickSubmit
        )}
      >
        <S.Wrapper>
          <S.Header>{isEdit ? "Product Edit" : "Product Posting"}</S.Header>
          {/* <S.Header>Product Posting</S.Header> */}
          <S.Product_Label>Product</S.Product_Label>
          <S.Product_Name
            type="text"
            placeholder="Please Enter the Product's Name"
            {...register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />

          <S.Image_Wrapper>
            {props.images[0] ? (
              <img src={`https://storage.googleapis.com/${props.images[0]}`} />
            ) : (
              <S.UploadButton
                onClick={props.onClickMyImages}
                defaultValue={props.data?.fetchUseditem.images}
              ></S.UploadButton>
            )}

            {/* {props.images[0] ? (
              <img
                style={{ width: "120px", height: "120px" }}
                src={`https://storage.googleapis.com/${props.images[0]}`}
              />
            ) : (
              <S.UploadButton
                onChange={props.onChangeFile}
                onClick={props.onClickMyImages}
              >
                <>+</>
                <>Upload</>
              </S.UploadButton>
            )} */}

            <input
              type="file"
              style={{ display: "none" }}
              onChange={props.onUploadFile}
              ref={props.fileRef}
            />
            {/* <S.UploadButton>
              <input type="file" style={{ display: "none" }} />
            </S.UploadButton>
            <S.UploadButton>
              <input type="file" style={{ display: "none" }} />
            </S.UploadButton> */}
          </S.Image_Wrapper>
          <label>Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            {...register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <label>Product Description</label>
          <ReactQuill
            onChange={handleChange}
            defaultValue={props.data?.fetchUseditem.contents}
          />
          <label>Tags</label>
          <input
            placeholder="Enter Your Tag"
            {...register("tags")}
            defaultValue={props.data?.fetchUseditem.tags}
          />
          <div>
            Map
            <img
              src="https://medelbou.files.wordpress.com/2012/02/map-12.png?w=640"
              width={450}
              height={450}
            />
            <span>Address1</span>
            <span>Address2</span>
          </div>
          <div>
            <div>GPS</div>
            <div>Latitude</div>
            <div>Longitude</div>
          </div>
          <label>Remark</label>
          <input
            placeholder="Remarks"
            type="text"
            {...register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <button>{isEdit ? "Edit" : "Submit"}</button>
          {/* <button>Submit</button> */}
        </S.Wrapper>
      </form>
    </>
  );
}
