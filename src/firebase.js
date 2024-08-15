import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKKAwGJ4O9psD1QLGSo6N6qIq82tj5biA",
  authDomain: "netflix-clone-b91c9.firebaseapp.com",
  projectId: "netflix-clone-b91c9",
  storageBucket: "netflix-clone-b91c9.appspot.com",
  messagingSenderId: "355308180936",
  appId: "1:355308180936:web:de0004c64823ddf3b49cfd"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Hàm đăng ký
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("Đăng ký thành công!");
  } catch (error) {
    console.log(error);
    toast.error(error.message || "Đăng ký thất bại");
  }
};

// Hàm đăng nhập
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Đăng nhập thành công!");
  } catch (error) {
    console.log(error);
    toast.error(error.message || "Đăng nhập thất bại");
  }
};

// Hàm đăng xuất
const logout = () => {
  signOut(auth);
  toast.success("Đã đăng xuất");
};

export { auth, db, login, signup, logout };
