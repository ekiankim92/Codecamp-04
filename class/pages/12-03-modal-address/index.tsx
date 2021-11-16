import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonocode] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setMyAddress(data.address);
    setMyZonocode(data.zonecode);
    setMyAddressDetail(data.myAddressDetail);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress}</div>
      <div>내 우편번호: {myZonecode}</div>
      <div>내 주소명: {myAddressDetail}</div>
      {isOpen && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

//상황에 따라서 안에 있는 내용이 사라지게 아니면 계속 정보가 남아있게
// 비밀번호는 나갔다 들어오면 바로 사라지게
// 이력서 쓰는곳에서 나갔다 들어오면 다시 이어서 하게
