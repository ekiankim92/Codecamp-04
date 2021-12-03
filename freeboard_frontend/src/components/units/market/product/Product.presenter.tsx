import * as S from "./Product.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Product.validations";

export default function ProductUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(props.onClickSubmit)}>
        <S.Wrapper>
          <S.Header>Product Posting</S.Header>
          <S.Product_Label>Product</S.Product_Label>
          <S.Product_Name
            type="text"
            placeholder="Please Enter the Product's Name"
            {...register("name")}
          />
          <input
            type="file"
            onClick={props.onClickMyImages}
            onChange={props.onUploadFile}
          />
          <S.Image_Wrapper>
            <S.UploadButton
              onClick={props.onClickMyImages}
              onChange={props.onUploadFile}
            >
              <input
                type="file"
                style={{ display: "none" }}
                onChange={props.onUploadFile}
              />
            </S.UploadButton>
            <S.UploadButton>
              <input type="file" style={{ display: "none" }} />
            </S.UploadButton>
            <S.UploadButton>
              <input type="file" style={{ display: "none" }} />
            </S.UploadButton>
          </S.Image_Wrapper>
          <label>Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            {...register("price")}
          />
          <label>Product Description</label>
          <textarea
            placeholder="Elaborate Your Product"
            rows="5"
            cols="50"
            {...register("contents")}
          />
          <label>Tags</label>
          <input placeholder="Enter Your Tag" {...register("tags")} />
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
          <input placeholder="Remarks" type="text" {...register("remarks")} />
          <button>Submit</button>
        </S.Wrapper>
      </form>
    </>
  );
}
