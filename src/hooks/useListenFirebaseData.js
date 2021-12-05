import { useState, useEffect} from "react";
import DB from "../helpers/Database";

const useListenFirebaseData = (queryPath, {filterCallback = null, order = null, orderValue = null, startListen = false} = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!startListen) return;
    const unsubscribe = DB.listenData(queryPath, (dataObj) => {
      setData(dataObj);
    }, order, orderValue);

    return () => unsubscribe();
  }, [queryPath, filterCallback, order, orderValue, startListen]);

  return [data];
}

export default useListenFirebaseData;