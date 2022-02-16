import * as S from "./Product.styles";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
// import { schema } from "./Product.validations";
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
import { IPropsProductUI } from "./Product.types";

export default function ProductUI(props: IPropsProductUI) {
  const { handleSubmit, register, setValue, trigger, formState } = useForm({
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
          <S.ProductWrapper>
            <S.ProductLabel>Product:</S.ProductLabel>
          </S.ProductWrapper>
          <S.ProductName
            type="text"
            placeholder="please enter the product's name"
            {...register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />
          <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
          <S.ImageWrapper>
            {props.images.map((el: any, index: number) => (
              <S.InnerImage key={uuidv4()}>
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </S.InnerImage>
            ))}
          </S.ImageWrapper>
          <div>{formState.errors.images?.message}</div>
          <S.PriceWrapper>
            <S.PriceLabel>Price:</S.PriceLabel>
          </S.PriceWrapper>
          <S.Price
            type="text"
            placeholder="selling price"
            {...register("price")}
            // @ts-ignore:next-line
            defaultValue={props.data?.fetchUseditem.price}
          />
          <div>{formState.errors.price?.message}</div>
          <S.DescriptionWrapper>
            <S.DescriptionLabel>Product Description:</S.DescriptionLabel>
          </S.DescriptionWrapper>
          {/* <S.DetailContents />; */}
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
          />
          <div>{formState.errors.contents?.message}</div>
          <S.TagWrapper>
            <S.TagLabel>Tags:</S.TagLabel>
          </S.TagWrapper>
          <Hashtag
            hashtag={props.hashtag}
            setHashtag={props.setHashtag}
            defaultValue={props.data?.fetchUseditem.tags}
          />
          <S.MapTitle>Map:</S.MapTitle>
          <S.MapWrapper>
            <KakaoMap
              address={props.address}
              defaultValue={props.data?.fetchUseditem.useditemAddress?.address}
            />
            <S.AddressWrapper>
              <S.AddressHeader>Seach Address:</S.AddressHeader>
              <S.AddressButton onClick={props.onClickSearchAddress}>
                Search
              </S.AddressButton>
              {props.addressOpen && (
                <Modal
                  visible={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcode onComplete={props.onCompleteAddressSearch} />
                </Modal>
              )}
              <S.ZipcodeLabel>Zipcode:</S.ZipcodeLabel>
              <S.Zipcode
                type="text"
                placeholder="91105"
                {...register("zipcode")}
                // @ts-ignore:next-line
                value={
                  props.zipcode ||
                  props.data?.fetchUseditem.useditemAddress?.zipcode
                }
                readOnly
              />
              <S.AddressLabel>Addres:</S.AddressLabel>
              <S.Address
                type="text"
                placeholder="address"
                {...register("address")}
                // @ts-ignore:next-line
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address
                }
                readOnly
              />
              <S.DetailLabel>AddressDetail:</S.DetailLabel>
              <S.DetailAddress
                type="text"
                placeholder="address detail"
                {...register("addressDetail")}
              />
            </S.AddressWrapper>
          </S.MapWrapper>
          <S.RemarkWrapper>
            <S.RemarkLabel>Remark:</S.RemarkLabel>
          </S.RemarkWrapper>
          <S.Remark
            placeholder="remarks"
            type="text"
            {...register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <div>{formState.errors.remarks?.message}</div>
          <S.ButtonWrapper>
            <S.SubmitButton>{isEdit ? "Edit" : "Submit"}</S.SubmitButton>
          </S.ButtonWrapper>
        </S.Wrapper>
      </form>
    </>
  );
}
