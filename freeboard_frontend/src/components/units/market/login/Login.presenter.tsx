import * as S from "./Login.styles";
import { Breadcrumb, Menu } from "antd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function LogInUI(props) {
  return (
    <div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={S.style}> */}
      <S.Wrapper>
        <S.Log_In_Info>
          <S.Login_Logo>
            Woof Woof!
            <S.Logo_Img src="images/pawn.png" />
          </S.Login_Logo>
          <S.Email_Log
            type="text"
            name="email"
            placeholder="Your login or e-mail"
            onChange={props.onChangeInputs}
          />
          <S.Password_Log
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.onChangeInputs}
          />
          <S.Sign_Log onClick={props.onClickLogin}>Log In</S.Sign_Log>
          <S.Register_Log onClick={props.onClickRegister}>
            Register
          </S.Register_Log>
          {props.data && <div>Welcome!</div>}
          <div>{props.data?.fetchUserLoggedIn.name}</div>
        </S.Log_In_Info>
        <S.Log_In_Picture></S.Log_In_Picture>
      </S.Wrapper>
      {/* </Box>
      </Modal> */}
    </div>
  );
}
