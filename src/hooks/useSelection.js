import { useState, useEffect } from "react";

const useSelection = () => {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    
    const selectionHandler = (e) => {
      setSelection(document.getSelection())
    }

    document.addEventListener('selectionchange', selectionHandler)
    return () => {
      document.removeEventListener('selectionchange', selectionHandler);
    }
  }, []);

  return selection;
}

export default useSelection;