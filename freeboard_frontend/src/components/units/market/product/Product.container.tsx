import ProductUI from "./Product.presenter";
import { FormValues, IPropsProduct } from "./Product.types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./Product.queries";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hocs/withAuth";
import { Modal } from "antd";

const Product = (props: IPropsProduct) => {
  const router = useRouter();

  const [hashtag, setHashtag] = useState<string[] | []>([]);

  const [addressOpen, setAddressOpen] = useState(false);
  const [zipcode, setZipcode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [images, setImages] = useState(["", "", ""]);

  // posting product
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  // updating product
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  // edit default data
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.marketId,
    },
  });

  // product posting
  async function onClickSubmit(data: FormValues) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashtag,
            images,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.success({ content: "Successfully Submitted" });
      console.log(result);
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error)
        console.log("createUsedItemError:", error.message);
    }
  }

  // update product posting
  const onClickProductUpdate = async (data: FormValues) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashtag,
            images,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
          useditemId: String(router.query.marketId),
        },
      });
      Modal.success({ content: "Successfully Edited" });
      console.log(result);
      router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error)
        console.log("ProductUpdateError:", error.message);
    }
  };

  const onToggleModal = () => {
    setAddressOpen((prev) => !prev);
  };

  const onClickSearchAddress = () => {
    setAddressOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setAddressOpen((prev) => !prev);
    console.log(data);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...images];
    newFileUrls[index] = fileUrl;
    setImages(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUsedItem.images?.length) {
      setImages([...props.data?.fetchUsedItem.images]);
    }
  });

  return (
    <ProductUI
      data={data}
      images={images}
      onClickSubmit={onClickSubmit}
      onClickProductUpdate={onClickProductUpdate}
      hashtag={hashtag}
      setHashtag={setHashtag}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onToggleModal={onToggleModal}
      addressOpen={addressOpen}
      zipcode={zipcode}
      address={address}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
};
export default withAuth(Product);
