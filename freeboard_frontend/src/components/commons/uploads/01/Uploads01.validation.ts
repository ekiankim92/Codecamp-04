import { Modal } from "antd";

export default function ImageValidation(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "There's no file" });
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "File is too big" });
    return;
  }
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.error({ content: "Please upload either jpeg or png files" });
    return false;
  }
  return file;
}
