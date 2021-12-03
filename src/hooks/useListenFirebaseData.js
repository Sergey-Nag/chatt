import { useState, useEffect} from "react";
import { listenData } from "../database/readData";
import returnUsersArrayFromObj from "../helpers/returnUsersArrayFromObj";

const useListenFirebaseData = (queryPath, {filterCallback = null, order = null, orderValue = null}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = listenData(queryPath, (dataObj) => {
      const d = filterCallback ? 
                  returnUsersArrayFromObj(dataObj).filter(filterCallback) : 
                  dataObj;

      if (d) setData(d);
    }, order, orderValue);

    return () => unsubscribe();
  }, [queryPath, filterCallback, order, orderValue]);

  return {data};
}

export default useListenFirebaseData;