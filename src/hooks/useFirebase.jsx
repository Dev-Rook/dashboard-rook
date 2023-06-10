import { useState, useEffect, useCallback } from "react";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFirebase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const dataRef = collection(db, `projects`);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getDocs(dataRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { loading, data, error };
};

export default useFirebase;
