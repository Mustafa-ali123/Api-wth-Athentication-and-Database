import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, set, ref, onValue } from "firebase/database";
import app from "./Firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {

    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                obj.id = res.user.uid
                const reference = ref(database, `users/${obj.id}`)
                set(reference, obj)

            }).then(() => {
                resolve(alert("You SignUp Successuly"))
            })
            .catch((err) => alert(err.message))


    });

};
 let loginUser = (obj) => {
    
    return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(auth,obj.email,obj.password).then(res=>{
            console.log(res.user.uid)
        
        }).then(()=>alert("You LogIn Successuly")).catch(err=>alert(err.message))


    })
};
let signoutUser = () => {
    return new Promise((resolve,reject)=>{
                                                            
        signOut(auth).then(res=>console.log(res)).catch(err=>console.log(err))
    })
    
 };
let fbGet = () => { };
let fbGetById = () => { };
let fbEdit = () => { };
let fbDelete = () => { };

export {
    signUpUser,
    loginUser,
    signoutUser,
    fbGet,
    fbGetById,
    fbEdit,
    fbDelete,
};