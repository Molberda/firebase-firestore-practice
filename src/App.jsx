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
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); 
      if (user) {
        setUser(user);
        setLogged(true);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@gmail.com", "test1234")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error)
      });
  }

  function login() {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "email@gmail.com", "test1234")
        .then((data) => {
          setUser(data.user);
          setLogged(true);
        })
        .catch((error) => {
          alert(error)
        });
    }, 1000);
  }

  function logout() {
    setTimeout(() => {
      signOut(auth);
      setUser({});
      setLogged(false);
    }, 1000);
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
