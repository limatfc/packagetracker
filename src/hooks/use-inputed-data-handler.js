import { useCallback, useState } from "react";

export default function useInputedDataHandler() {
  const [inputedData, setInputedData] = useState({
    parcelID: "",
    phoneNumber: "",
  });

  const storeInputedParcelID = useCallback((enteredParcelID) => {
    setInputedData((prev) => ({ ...prev, parcelID: enteredParcelID }));
  }, []);
  console.log("aaa", inputedData);

  return {
    storeInputedParcelID,
    inputedData,
  };
}
