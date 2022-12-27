import { useEffect, useState } from 'react';
import './App.css';
import { auth, db } from "./firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';

function App() {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  function createPost(){
    const post = {
      title: "land a $400k job",
      description: "finish frontend simplified"
    };
    const post1 = {
      title: "land a $300k job",
      description: "finish frontend simplified"
    };
    const post2 = {
      title: "land a $200k job",
      description: "finish frontend simplified"
    };

    addDoc(collection(db, "posts"), post)
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
    </div>
  );
}

export default App;
