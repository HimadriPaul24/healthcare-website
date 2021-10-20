import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut, createUserWithEmailAndPassword, GithubAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword,
} from "firebase/auth";
import {useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";
initializeAuthentication();     


//providers

//googleProvider
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

//facebook provider

const facebookProvider = new FacebookAuthProvider();

const auth = getAuth();




const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [services,setServices] = useState([]);
  const [loading,setLoading] = useState(true);
    


   

 //google sign in
 const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        setError(error.message);
      });
  };

     //   github sign in
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
    })
    .finally(() => setLoading(false))
    ;
  };
    //facebook sign in

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
      setUser(result.user)
      
    })
    .finally(() => setLoading(false));;
  };
    // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
    };
    
    // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
    };
    
    //email sign in

  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password).then((result) => {
      setUser(result.user);
    });
    };
    
    //sign up

  const signUp = (e) => {
    e.preventDefault();
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      alert("user's has been created")
    }).catch(error => {
      setError(error.message)
    })
  };

    // sign out

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // If an error occured .
      });
    };
    
    //get the user, who sign in currently

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({});
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, []);


  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setServices(data))

  },[])
    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        signInWithGithub,
        signInWithFacebook,
        signInWithEmail,
        getEmail,
        getPassword,
        signUp,
        services,
        loading
    };
};

export default useFirebase;


