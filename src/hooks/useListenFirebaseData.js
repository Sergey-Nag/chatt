import { useState, useEffect} from "react";
import DB from "../helpers/Database";
import returnArrayFromObj from "../helpers/returnArrayFromObj";

const useListenFirebaseData = (queryPath, {filterCallback = null, startListen = null, limit = null, saveKey = false} = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (startListen !== null && !startListen) return;
    const unsubscribe = DB.listenData(queryPath, (dataObj) => {
      if (dataObj === null) return;
      let data = dataObj;
      if (filterCallback) data = returnArrayFromObj(data, saveKey).filter(filterCallback);
      setData(data);
    }, {limit});

    return () => unsubscribe();
  }, [queryPath, filterCallback, startListen, limit, saveKey]);

  return [data];
}

export default useListenFirebaseData;