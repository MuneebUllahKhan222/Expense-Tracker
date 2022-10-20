import { database } from "./dbcontroller";

class UiController {


    signUp(state){
        document.querySelector('.container-fluid').innerHTML='';
        let outputRight ='';
        let outputLeft = '';

        const rightSign =document.createElement('div');
        rightSign.setAttribute('id','right-sign');
        const rowFlex = document.createElement('div');
        rowFlex.setAttribute('class','row-flex');
        const leftSign =document.createElement('div')
        leftSign.setAttribute('id','left-sign');

        rowFlex.appendChild(leftSign)
        rowFlex.appendChild(rightSign)
        
        document.querySelector('.container-fluid').appendChild(rowFlex);



        if (state === true) {
            outputLeft += `
            <div class="sign-up">
                <h1>SIGN UP</h1>
                <p>Create your account, <br> enter details</p>
            </div>
            `;
            outputRight += `
            <div id='main-sign'>
            <h1>CREATE ACCOUNT</h1>
            <div class="form-floating mb-3 form-div mt-4">
                
                <input type="text" class="form-control" id="signup-name" placeholder="muneeb">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating form-div">
                
                <input type="email" class="form-control mb-3" id="signup-email" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
                <div id="signUpEmailHelpBlock" class="signUpEmailHelpBlock is-invalid" hidden>
                    Please Enter a valid email.
                </div>
              </div>
            <div class="form-floating form-div">               
                <input type="password" class="form-control" id="signup-password" placeholder="Password">
                <label for="floatingPassword">Password</label>
                <div id="signUpPasswordHelpBlock" class="signUpPasswordHelpBlock is-invalid" hidden>
                    Please enter more than 6 characters.
                </div>
            </div>
            <button type="button" class="mt-5 btn mb-3 btn-signup">SIGN UP</button>
            <p>Already have an account? <a class="change-signup-state">Login</a></p>
            </div>
            `
        } else if (state === false) {
            outputLeft += `
            <div class="sign-in">
            <h1>SIGN IN</h1>
            <p>LET's Sign into your <br> account</p>
            </div>
            `

            outputRight += `
            <div id='main-sign'>
            <h1>SIGN IN</h1>
        <div class="form-floating mb-3 form-div mt-4">
            
            <input type="email" class="form-control" id="signin-email" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            <div id="helper" class="signInEmailHelpBlock">
                
            </div>
        </div>
        <div class="form-floating form-div">
            
            <input type="password" class="form-control" id="signin-password" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button type="button" class="mt-5 btn mb-3 btn-signin">SIGN IN</button>
        <p>Don't have an account? <a class="change-signin-state">Signup Here</a></p>
         </div>   
        `
        }

        document.querySelector('#right-sign').innerHTML = outputRight;
        document.querySelector('#left-sign').innerHTML = outputLeft;
    }





    // Home screen

    home() {
        document.querySelector('.container-fluid').innerHTML='';

        let outputLeft = '';
        let outputRight = '';

        const home = document.createElement('div');
        home.setAttribute('id', 'home');

        const homeLeft= document.createElement('div');
        homeLeft.setAttribute('id', 'home-left');

        const homeLeftFlex = document.createElement('div');
        homeLeftFlex.setAttribute('id', 'home-left-flex');

        homeLeft.appendChild(homeLeftFlex);

        const homeRight= document.createElement('div');
        homeRight.setAttribute('id', 'home-right');

        const homeRightFlex = document.createElement('div');
        homeRightFlex.setAttribute('id', 'home-right-flex');

        homeRight.appendChild(homeRightFlex);

        home.appendChild(homeLeft);
        home.appendChild(homeRight);

        document.querySelector('.container-fluid').appendChild(home)

        outputLeft += `
        <div>
        <h3 class="mb-3">Add Transaction</h3>
        <div id="add-transaction">
            <div class="shadow p-3 mb-5 input-container">
                <input type="number" id="amount" placeholder="Enter amount">
                
                <select class="form-select" id="from" aria-label="Default select example">
                    <option value="Cash" selected>Cash</option>
                    <option value="Saving">Saving</option>
                </select>
            </div>
                <button type="button" id='expense' class="btn btn-outline active" data-bs-toggle="button" autocomplete="off"> <i class="fa-solid fa-credit-card"></i> <br>Expense</button>
                <button type="button" id='income' class="btn btn-outline" data-bs-toggle="button" autocomplete="off"> <i class="fa-sharp fa-solid fa-cloud-arrow-up"></i> <br>Income</button>
        </div>
        </div>

        <div>
            <h5 class="mb-3">Select Category</h5>
            <div id="main-category">
            <div class="formik me-3">
            <input class="form-check-input radio" type="radio" name="exampleRadios" id="exampleRadios1" value="Home">
            <p>Home</p>
          </div>
          <div class="formik ms-2 me-2">
            <input class="form-check-input radio" type="radio" name="exampleRadios" id="exampleRadios1" value="Shopping">
            <p>Shopping</p>
          </div>
          <div class="formik ms-2 me-2">
            <input class="form-check-input radio" type="radio" name="exampleRadios" id="exampleRadios1" value="Gifts">
            <p>Gifts</p>
          </div>
          <div class="formik ms-2 me-2">
            <input class="form-check-input radio" type="radio" name="exampleRadios" id="exampleRadios1" value="Mobile">
            <p>Mobile</p>
          </div>
          <div class="formik ms-2 me-2">
            <input class="form-check-input radio" type="radio" name="exampleRadios" id="exampleRadios1" value="Family">
            <p>Family</p>
          </div>
          <div class="formik ms-2 me-2">
            <input class="form-check-input radio" type="radio" name="exampleRadios" id="exampleRadios1" value="Others">
            <p>Others</p>
          </div>       
            </div>
            <button class="btn btn-outline-primary shadow mt-2" id="add">Add</button>
        </div> 


        <div class="mt-4">
            <h5>Transactions History</h5>
        
            <table class="table mt-3">
                <tbody id='transaction-table'>
                                    
                </tbody>
            </table>    
        </div>
        </div>
        </div>
        `;

        
        outputRight += `
        <div id="avatar-icon" class="mt-4">
            <button id='logout' class="btn btn-outline-secondary me-4">Logout</button>
        </div>


        <div class="p-3" id="main-right">
        <h5>What you have</h5>

        <h3 id="balance" class="mt-3">PKR 20,000</h3>

        <div id="type-account" class="p-4">
            <div class="type">
                Cash <br>
                <span>10,000</span>
            </div>
            <div class="type">
                Bank <br>
                <span>10,000</span>
            </div>
            <div class="type">
                Savings <br>
                <span>0</span>
            </div>
        </div>


        <div id="data" class="mt-4 p-4">
            <div id="inner-data">
                <p><strong>Add Account</strong></p>
                <button class="btn" id="add-more" data-modal-target="#modal">Add more +</button>
            </div>

            <div class="inner-data2 mt-1">
                <div class="col-data mt-2">
                    <p>Cash</p>
                    <p>Saving</p>
                    <p>Meezan</p>
                </div>
                <div class="col-data mt-2">
                    <p>PKR 10,000</p>
                    <p>PKR 0</p>
                    <p>PKR 10,000</p>
                </div>
            </div>
        </div>


        <div class="p-4" id='overview' hidden>
            Home
        </div>

        <div class="p-4" id='type' hidden>Expense</div>
        `;



        document.querySelector('#home-left-flex').innerHTML = outputLeft;
        document.querySelector('#home-right-flex').innerHTML = outputRight;

    }


    getSignInCredentials(){
        const email = document.querySelector('#signin-email').value
        const password = document.querySelector('#signin-password').value
        const cred = {
            email,
            password
        }
        return cred;
    }


    getSignUpCredentials(){
        const name = document.querySelector('#signup-name').value;
        const email = document.querySelector('#signup-email').value;
        const password = document.querySelector('#signup-password').value;
        const cred = {
            name,
            email,
            password
        }
        return cred;
    
    }

    radioButton() {
        let radioVal ='';
    
        const radios = document.querySelectorAll('input[name="exampleRadios"]');
        radios.forEach(radio => {
        radio.addEventListener('click', function () {
            radioVal = radio.value;
            console.log(radioVal);  
            document.querySelector('#overview').textContent = radioVal      
        });
        
        return radioVal
        });
    }

    getExpenseInfo() {

        
        const amount = document.querySelector('#amount').value;
        const from = document.querySelector('#from').value;
        const type = document.querySelector('#type').textContent;
        const category = document.querySelector('#overview').textContent;
        console.log(type)

        const expense = {
            amount,
            from,
            type,
            category
        }
        return expense
    }

    setTable(data){

        let output='';

        data.forEach(data1 => {
            if(data1.type.length == 9) {
                output += `
                <tr>
                    <td><strong>${data1.category}</strong></td>
                    <td class="bank">${data1.from}</td>
                    <td class="date">${data1.date}</td>
                    <td class="minus">Rs - ${data1.amount} Pkr</td>
                </tr>
                `   
            } else {
                output += `
                <tr>
                    <td><strong>${data1.category}</strong></td>
                    <td class="bank">${data1.from}</td>
                    <td class="date">${data1.date}</td>
                    <td class="plus">Rs - ${data1.amount} Pkr</td>
                </tr>
                `   
            }
            
        });

        document.querySelector('#transaction-table').innerHTML = output;
    }




    formValidation(msg){
        let output=msg;

        document.querySelector('#helper').innerHTML = `<p class='is-invalid'>${output}</p>`;
    }


}




export const ui = new UiController();
