import { useState } from "react";
import LuggageUI from "./luggage.presenter";

export default function Luggage() {
  const [midSizeCount, setMidSizeCount] = useState(0);
  const [extraSizeCount, setExtraSizeCount] = useState(0);
  const [disableMinus, setDisableMinus] = useState(false);
  const [disablePlus, setDisalbePlus] = useState(false);
  const [disableExtraMinus, setDisableExtraMinus] = useState(false);
  const [disableExtraPlus, setDisableExtraPlus] = useState(false);

  const totalSum = Number(midSizeCount + extraSizeCount);

  const onClickMidSizePlusCount = () => {
    console.log("midsize luggage:", midSizeCount);
    console.log("total number:", totalSum);
    setMidSizeCount((prev) => prev + 1);
    if (midSizeCount >= 0) {
      setDisableMinus(false);
    }
    if (midSizeCount === 8) {
      setMidSizeCount(8);
      setDisalbePlus(true);
    }
  };

  const onClickMidSizeMinusCount = () => {
    console.log("midsize luggage:", midSizeCount);
    console.log("total number:", totalSum);
    setMidSizeCount((prev) => prev - 1);
    if (midSizeCount <= 0 || midSizeCount === 0) {
      setMidSizeCount(0);
      setDisableMinus(true);
    } else if (midSizeCount >= 7) {
      setDisalbePlus(false);
    }
  };

  const onClickExtraSizePlusCount = () => {
    console.log("extra size luggage:", extraSizeCount);
    console.log("total number:", totalSum);
    setExtraSizeCount((prev) => prev + 1);
    if (extraSizeCount === 4) {
      setExtraSizeCount(4);
      setDisableExtraPlus(true);
    } else if (extraSizeCount >= 0) {
      setDisableExtraMinus(false);
    }
    if (totalSum === 7) {
      setDisableExtraPlus(true);
      setDisalbePlus(true);
    }
  };

  const onClickExtraSizeMinusCount = () => {
    console.log("extra size luggage:", extraSizeCount);
    console.log("total number:", totalSum);
    setExtraSizeCount((prev) => prev - 1);
    if (extraSizeCount <= 0 || extraSizeCount === 0) {
      setExtraSizeCount(0);
      setDisableExtraMinus(true);
    } else if (extraSizeCount <= 4) {
      setDisableExtraPlus(false);
    }
  };

  return (
    <LuggageUI
      onClickMidSizePlusCount={onClickMidSizePlusCount}
      onClickMidSizeMinusCount={onClickMidSizeMinusCount}
      onClickExtraSizePlusCount={onClickExtraSizePlusCount}
      onClickExtraSizeMinusCount={onClickExtraSizeMinusCount}
      midSizeCount={midSizeCount}
      extraSizeCount={extraSizeCount}
      disableMinus={disableMinus}
      disablePlus={disablePlus}
      disableExtraMinus={disableExtraMinus}
      disableExtraPlus={disableExtraPlus}
      totalSum={totalSum}
    />
  );
}
