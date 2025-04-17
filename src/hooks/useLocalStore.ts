import { useEffect, useState } from "react";

export default function useLocalStore() {
  const [localData, setLocalData] = useState<any>(null);

  const getLocalStoreData = () => {
    const rawdatafromlocal = localData
      ? localData
      : JSON.parse(localStorage.getItem("datas")!);
    return rawdatafromlocal;
  };

  const setLocalStoreData = (data: any) => {
    const currentLocalData = getLocalStoreData();
    const updatedData = { ...currentLocalData, data };
    setLocalData(updatedData);
    localStorage.setItem("datas", JSON.stringify(updatedData));
  };

  useEffect(() => {
    const currentLocalData = getLocalStoreData();
    setLocalData(currentLocalData);
  }, []);

  return { getLocalStoreData, setLocalStoreData };
}
