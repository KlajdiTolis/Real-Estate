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
  endBefore,
  startAt,
  endAt,
} from "firebase/firestore";
import { async } from "q";

const Contact = () => {
  const [todos, setTodos] = useState<any>([]);
  const [data, setData] = useState<any>([]);
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
    const first = query(collection(db, "home"), orderBy("price"), limit(5));
    const documentSnapshots = await getDocs(first);
    const mappp = documentSnapshots.docs.map((data: any) => data.data());
    setData(mappp);
    console.log(data[data.length - 1].price, "todosss");

    query(
      collection(db, "home"),
      orderBy("price"),
      startAfter(data[data.length - 1].price),
      limit(5)
    );
  };
  // console.log(data, "todosss");

  const addData = async () => {
    const docRef = await addDoc(collection(db, "home"), {
      desc: "vlore",
      location: { _lat: 32.32, _long: 32.3213 },
      name: "vlore",
      price: 200000,
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

  // const filterBy = async () => {
  //   const citiesRef = collection(db, "user");
  //   const q = query(citiesRef, where("name", "==", "klajdi"));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.docs.map((doc: any) => console.log(doc.data()));
  // };

  const orderByy = async () => {
    const first = query(collection(db, "home"), orderBy("desc"), limit(2));
    const documentSnapshots = await getDocs(first);
    const mappp = documentSnapshots.docs.map((data: any) => data.data());
    console.log(mappp, "todos");
  };

  useEffect(() => {
    // fetchData();
    // addData();
    // updataData();
    orderByy();
    // filterBy();
  }, []);

  return (
    <div>
      {data?.map((dataa: any, index: any) => (
        <div key={index}>{dataa.desc}</div>
      ))}
    </div>
  );
};

export default Contact;
