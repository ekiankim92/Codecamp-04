import {Modal, Button} from 'antd'
import React, { useState } from 'react';

export default function ModalBasicPage(){
const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        Open Modal
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력: <input type='password'/>
      </Modal>
    </>
  )
}

// const ModalBasicPage = () => {

//     return()
// }
// export ModalBasicPage