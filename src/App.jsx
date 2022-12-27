import { useEffect, useState } from 'react';
import './App.css';
import { auth } from "./firebase/init.js";
import { db } from "./firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "emai12@gmail.com", "test1234")
      .then((data) => {
        console.log(data.user)
      })
      .catch((error) => {
        alert(error)
      });
  }

  function login() {
      signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
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
    </div>
  );
}

export default App;
