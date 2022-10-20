import  {auth}  from './firebase';
import { ui } from './UiController';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



class Auth {


    signIn(cred) {
        const {email, password} = cred
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
            }).catch(e => {
                if (e.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
                    ui.formValidation('Please enter a valid email')
                  } else if (e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    
                    ui.formValidation('Please enter a proper and valid password of more than 6 characters')
                  } else if (e.message === 'Firebase: An internal AuthError has occurred. (auth/internal-error).') {
                    
                    ui.formValidation('Please enter a proper and valid password of more than 6 characters')
                  } else if (e.message === 'Firebase: Error (auth/missing-email).') {
                    
                    ui.formValidation('Please enter a valid email');
                  } else if (e.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
                    
                    ui.formValidation('Please enter a proper and valid password of more than 6 characters')
                  } 
            })


    }

    signUp(cred) {
        const {name ,email, password} = cred;
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth, 'signup-sucessffull');
            }).catch(e => {
                console.log(e);
            })
    }

    signOut() {
        auth.signOut();
    }






}



export const firebaseAuth = new Auth();