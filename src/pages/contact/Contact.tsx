import { useEffect, useState } from "react";

import { db } from "../../firebase/Firebase";
import {
  collection,
  getDocs,
  query,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Contact = () => {
  const [todos, setTodos] = useState<any>([]);

  const fetchData = async () => {
    const doc = await getDocs(collection(db, "user"));
    doc.forEach((docc: any) => {
      console.log(docc.id, " => ", docc.data());
      setTodos(docc.data());
    });
  };

  const addData = async () => {
    const docRef = await addDoc(collection(db, "user"), {
      name: "Klajdi",
      country: "vloree",
    });
  };

  const updataData = async () => {
    const washingtonRef = doc(db, "user", "aOzDOly7Risa73I8x2G2");

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      test: "hello",
    });
  };

  useEffect(() => {
    fetchData();
    addData();
    updataData();
  }, []);

  return <div>contact</div>;
};

export default Contact;
