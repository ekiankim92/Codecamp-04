import * as S from "./Product.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Product.validations";
import { useContext } from "react";
import { MyContext } from "../../../../../pages/market/[marketId]/edit";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMap from "../../../commons/kakaomap/map.container";
import Hashtag from "../../../commons/hashtag/hashtag";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

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
          <div>Error Message</div>
          <S.Image_Wrapper>
            {props.images.map((el, index) => (
              <div>
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  defaultFileUrl={props.data?.fetchUseditem.images[index]}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </div>
            ))}
            {/* <div>=======================</div>
            {props.images[0] ? (
              <img src={`https://storage.googleapis.com/${props.images[0]}`} />
            ) : (
              <S.UploadButton
                onClick={props.onClickMyImages}
                defaultValue={props.data?.fetchUseditem.images}
              ></S.UploadButton>
            )}
              <div>=======================</div> */}
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
            {/* <div>=======================</div>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={props.onUploadFile}
              ref={props.fileRef}
            />
              <div>=======================</div> */}
            {/* <S.UploadButton>
              <input type="file" style={{ display: "none" }} />
            </S.UploadButton>
            <S.UploadButton>
              <input type="file" style={{ display: "none" }} />
            </S.UploadButton> */}
          </S.Image_Wrapper>
          <div>Error Message</div>
          <label>Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            {...register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <div>Error Message</div>
          <label>Product Description</label>
          <ReactQuill
            onChange={handleChange}
            defaultValue={props.data?.fetchUseditem.contents}
            // setValue={props.data?.fetchUseditem.contents}
          />
          <div>Error Message</div>
          {/* <label>Tags</label> */}
          {/* <input
            placeholder="Enter Your Tag"
            {...register("tags")}
            defaultValue={props.data?.fetchUseditem.tags}
          /> */}
          <Hashtag
            hashtag={props.hashtag}
            setHashtag={props.setHashtag}
            defaultValue={props.data?.fetchUseditem.tags}
          />
          <div>
            Map
            <KakaoMap />
            <div>
              <label>Seach Address</label>
              <button onClick={props.onClickSearchAddress}>Search</button>
            </div>
            ===============================
            {props.addressOpen && (
              <Modal
                visible={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              >
                <DaumPostcode onComplete={props.onCompleteAddressSearch} />
              </Modal>
            )}
            ===============================
            <div>
              <label>Zipcode</label>
              <input
                type="text"
                placeholder="91105"
                {...register("zipcode")}
                value={
                  props.zipcode ||
                  props.data?.fetchUseditem.useditemAddress.zipcode
                }
              />
            </div>
            <div>
              <label>Addres</label>
              <input
                type="text"
                placeholder="Address"
                {...register("address")}
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress.address
                }
              />
            </div>
            <div>
              <label>AddressDetail</label>
              <input
                type="text"
                placeholder="Address Detail"
                {...register("addressDetail")}
              />
            </div>
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
        </S.Wrapper>
      </form>
    </>
  );
}
