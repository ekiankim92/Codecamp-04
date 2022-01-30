import * as S from "./Product.styles";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Product.validations";
import React, { useContext } from "react";
import { MyContext } from "../../../../../pages/market/[marketId]/edit";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMap from "../../../commons/kakaomap/map.container";
import Hashtag from "../../../commons/hashtag/hashtag";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { IPropsProductUI } from "./Product.types";

export default function ProductUI(props: IPropsProductUI) {
  const { handleSubmit, register, setValue, trigger, getValues, formState } =
    useForm({
      mode: "onChange",
      // resolver: yupResolver(schema),
    });

  const { isEdit }: any = useContext(MyContext);

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
          <S.Product_Wrapper>
            <S.Product_Label>Product:</S.Product_Label>
          </S.Product_Wrapper>
          <S.Product_Name
            type="text"
            placeholder="Please Enter the Product's Name"
            {...register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />
          <S.Error_Message>{formState.errors.name?.message}</S.Error_Message>
          <S.Image_Wrapper>
            {props.images.map((el: any, index: number) => (
              <S.Inner_Image>
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </S.Inner_Image>
            ))}
          </S.Image_Wrapper>
          <div>{formState.errors.images?.message}</div>
          <S.Price_Wrapper>
            <S.Price_Label>Price:</S.Price_Label>
          </S.Price_Wrapper>
          <S.Price
            type="text"
            placeholder="Selling Price"
            {...register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <div>{formState.errors.price?.message}</div>
          <S.Description_Wrapper>
            <S.Description_Label>Product Description:</S.Description_Label>
          </S.Description_Wrapper>
          <ReactQuill
            onChange={handleChange}
            defaultValue={props.data?.fetchUseditem.contents}
            // setValue={props.data?.fetchUseditem.contents}
            style={{
              width: "450px",
              height: "10em",
              margin: "5px",
              backgroundColor: "white",
            }}
            // value={
            //   getValues("contents") || props.data?.fetchUseditem.contents || ""
            // }
          />
          <div>{formState.errors.contents?.message}</div>
          <S.Tag_Wrapper>
            <S.Tag_Label>Tags:</S.Tag_Label>
          </S.Tag_Wrapper>
          <Hashtag
            hashtag={props.hashtag}
            setHashtag={props.setHashtag}
            defaultValue={props.data?.fetchUseditem.tags}
          />
          <S.Map_Title>Map:</S.Map_Title>
          <S.Map_Wrapper>
            <KakaoMap
              address={props.address}
              defaultValue={props.data?.fetchUseditem.useditemAddress?.address}
            />
            <S.Address_Wrapper>
              <S.Address_Header>Seach Address:</S.Address_Header>
              <S.Address_Button onClick={props.onClickSearchAddress}>
                Search
              </S.Address_Button>
              {props.addressOpen && (
                <Modal
                  visible={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcode onComplete={props.onCompleteAddressSearch} />
                </Modal>
              )}
              <S.Zipcode_Label>Zipcode:</S.Zipcode_Label>
              <S.Zipcode
                type="text"
                placeholder="91105"
                {...register("zipcode")}
                value={
                  props.zipcode ||
                  props.data?.fetchUseditem.useditemAddress?.zipcode
                }
                readOnly
              />
              <S.Address_Label>Addres:</S.Address_Label>
              <S.Address
                type="text"
                placeholder="Address"
                {...register("address")}
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address
                }
                readOnly
              />
              <S.Detail_Label>AddressDetail:</S.Detail_Label>
              <S.Detail_Address
                type="text"
                placeholder="Address Detail"
                {...register("addressDetail")}
              />
            </S.Address_Wrapper>
          </S.Map_Wrapper>
          <S.Remark_Wrapper>
            <S.Remark_Label>Remark:</S.Remark_Label>
          </S.Remark_Wrapper>
          <S.Remark
            placeholder="Remarks"
            type="text"
            {...register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <div>{formState.errors.remarks?.message}</div>
          <S.Button_Wrapper>
            <S.Submit_Button>{isEdit ? "Edit" : "Submit"}</S.Submit_Button>
          </S.Button_Wrapper>
        </S.Wrapper>
      </form>
    </>
  );
}
