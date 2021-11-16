import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonocode] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // // false인걸 true 로 바꿔주는거임
  // // 기본이 false 이기 때문에

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // // true 일때 실행해서 false 로 바꿔줌
  // // 이미 false 인 애를 true 로 바꿔줌
  // // 기존에 있는걸 끄집어 와서 역으로 실행

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  //toggle 꺼져있는걸 켜고 켜있는걸 끄고

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setMyAddress(data.address);
    setMyZonocode(data.zonecode);
    setMyAddressDetail(data.myAddressDetail);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress}</div>
      <div>내 우편번호: {myZonecode}</div>
      <div>내 주소명: {myAddressDetail}</div>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
