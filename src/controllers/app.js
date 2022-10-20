import { ui } from './UiController';
import { firebaseAuth } from './authFirebase';
import '../styles/main.scss'
import { auth, db } from './firebase';
import { database } from './dbcontroller';




document.addEventListener('DOMContentLoaded', initializer);



    function loadSignInListeners(){
        document.querySelector('.change-signin-state').addEventListener('click', toggletoSignupState);
        document.querySelector('.btn-signin').addEventListener('click', signIn)
    }


    function loadSignUpListeners(){
        document.querySelector('.change-signup-state').addEventListener('click', toggletoSigninState);
        document.querySelector('.btn-signup').addEventListener('click', signUp);
        document.querySelector('#signup-email').addEventListener('blur', validateSignUpEmail)
        document.querySelector('#signup-password').addEventListener('blur', validateSignUpPassword)
    }

    function homeListeners(){
        document.querySelector('#add').addEventListener('click', addExpense)
        document.querySelector('#logout').addEventListener('click', signOut)
        document.querySelector('#expense').addEventListener('click', typeExpense)
        document.querySelector('#income').addEventListener('click', typeIncome)
    }


// function radioButton() {
//     let radioVal ='Others';

//     const radios = document.querySelectorAll('input[name="exampleRadios"]');
//     radios.forEach(radio => {
//     radio.addEventListener('click', function () {
//         radioVal = radio.value;
//         console.log(radioVal);
//         return radioVal
//     });

//     });
// }


let uid;
let category;

function getExpense() {
    database.getDoc(uid);
}




function initializer(e){
    e.preventDefault();
    
    auth.onAuthStateChanged(authUser => {
        if (authUser) {
            uid = authUser.uid;     
            ui.home();
            homeListeners();
            localStorage.setItem('user', authUser.email);
            getExpense();
            category= ui.radioButton();
            console.log(category)
        } else {
            ui.signUp(false);
            loadSignInListeners();
        }
    })
}




function toggletoSignupState(e){
    ui.signUp(true)
    loadSignUpListeners();
    e.preventDefault();
}

function toggletoSigninState(e){
    ui.signUp(false);
    loadSignInListeners();
    e.preventDefault();
}



function signIn(e){
    e.preventDefault();
    const credentials = ui.getSignInCredentials();
    firebaseAuth.signIn(credentials);
}



function signUp(e) {
    e.preventDefault();
    const credentials = ui.getSignUpCredentials();
    firebaseAuth.signUp(credentials);
}


function signOut(e) {
    e.preventDefault();
    firebaseAuth.signOut();
    localStorage.removeItem('user')
}

function addExpense(e) {
    e.preventDefault()
    const expense = ui.getExpenseInfo();
    console.log(expense.type.length)
    if (expense.amount !== '') {
        database.saveDoc(uid, expense.amount, expense.category, expense.from, expense.type)
    }
    document.querySelector('#amount').value = ''
    getExpense(uid);
}

function typeExpense(e){
    e.preventDefault();
    const abc = document.querySelector('#expense').textContent
    document.querySelector('#type').textContent = abc;
}

function typeIncome(e){
    e.preventDefault();
    const abc = document.querySelector('#income').textContent
    console.log(abc)
    document.querySelector('#type').textContent = abc;
}


//validations

function validateSignUpEmail(e) {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value
    var pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/; 
    if (pattern.test(email) !== true) {
        const helper = document.getElementsByClassName('signUpEmailHelpBlock')
        helper[0].hidden = false;
    } else {
        const helper = document.getElementsByClassName('signUpEmailHelpBlock')
        if ( helper[0].hidden === false){
            helper[0].hidden = true;
        }       
    }
}

function validateSignUpPassword(e) {
    e.preventDefault();
    const password = document.getElementById('signup-password').value;
    var pattern = /[a-zA-Z0-9]{6,}$/ ;
    if (pattern.test(password) !== true) {
        const helper = document.getElementsByClassName('signUpPasswordHelpBlock')
        helper[0].hidden = false;
    } else {
        const helper = document.getElementsByClassName('signUpPasswordHelpBlock')
        if ( helper[0].hidden === false){
            helper[0].hidden = true;
        }       
    }
}
