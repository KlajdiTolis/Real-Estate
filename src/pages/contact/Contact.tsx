import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase";
import {
  collection,
  getDoc,
  query,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";

const Contact = () => {
  const [todos, setTodos] = useState<any>([]);
  const [user, error, isloading] = useAuthState(auth);

  const fetchData = async () => {
    const doc = await getDocs(collection(db, "home"));
    setTodos(
      doc.docs.map((docc: any) => ({
        ...docc.data(),
        id: docc.id,
      }))
    );
    // const docRef = doc(db, "home");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  };

  const test = async () => {
    const first = query(collection(db, "home"), orderBy("price"), limit(4));
    const documentSnapshots = await getDocs(first);
   const mappp = documentSnapshots.docs.map((data:any)=>(
    data.data()
   ))
    console.log(mappp, "todos");
  };

  const addData = async () => {
    const docRef = await addDoc(collection(db, "user"), {
      name: "Klajdi",
      country: "vloree",
    });
  };

  const updataData = async () => {
    const updateProperty = doc(db, "home", "NiVYg7LBkfWxLlWhiDLA");

    // Set the "capital" field of the city 'DC'
    await updateDoc(updateProperty, {
      desc: "Klajdiiii",
      location: { _lat: 32.32, _long: 32.3213 },
      name: "klajdi",
      price: 2000,
    });
  };

  useEffect(() => {
    fetchData();
    // addData();
    updataData();
    test();
  }, []);

  return (
    <div>
      {todos?.map((dataa: any, index: any) => (
        <div key={index}>{dataa.desc}</div>
      ))}
    </div>
  );
};

export default Contact;
