import { useEffect, useState } from 'react';
import './App.css';
import { auth, db } from "./firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, doc, query, where } from 'firebase/firestore';

function App() {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  function createPost(){
    const post = {
      title: "Finish Firebase Section",
      description: "Do frontend simplified",
      uid: user.uid
    };

    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts(){
    const { docs } = await getDocs(collection(db, "posts"))
    const posts = docs.map((doc) => ({...doc.data(), id: doc.id}))
    console.log(posts)
  }

  async function getPostById(){
    const hardCodedId = "suHs0t75foFxpIODmzGE"
    const postRef = doc(db, "posts", hardCodedId)
    const postSnap = await getDoc(postRef)
    const post = postSnap.data()
    console.log(post)
  }

  async function getPostByUid(){
    const postCollection = await query(
    collection(db, "posts"),
    where("uid", "==", user.uid)
    )
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email12@gmail.com", "test1234")
      .then((data) => {
        console.log(data.user)
      })
      .catch((error) => {
        alert(error)
      });
  }

  function login() {
      signInWithEmailAndPassword(auth, "email12@gmail.com", "test1234")
        .then((data) => {
          setUser(data.user);
          console.log(data.user)
        })
        .catch((error) => {
          alert(error)
        });
  }

  function logout() {
      signOut(auth);
      setUser({});
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post By Id</button>
    </div>
  );
}

export default App;
