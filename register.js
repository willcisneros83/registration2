console.log("User Register");
//create constructor
class User{
    constructor(email,pass,first,last,age,phone,address,payment,color){
            //this.attribute=parameter;
            this.email=email;
            this.password=pass
            this.fname=first;
            this.lname=last;
            this.age=age;
            this.phone=phone;
            this.address=address;
            this.payment=payment;
            this.color=color;
    }
}

function createRow(user){
    return `<tr>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
            </tr>`;
}

function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid = true;
    if(user.fname.length <= 0){
        //is not a valid value
        valid = false;
        $("#txtFirst").css("border-color","blue");
    }
    if(user.lname.length <= 0){
        //is not a valid value
        valid = false;
    }
    if(user.password.length <= 0){
        //is not a valid value
        valid = false;
    }

    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val();//check your id on the HTML
    let password = $("#txtPassword").val();
    let fname = $("#txtFirst").val();
    let lname = $("#txtLast").val();
    let age = $("#txtAge").val();
    let phone = $("#txtPhone").val();
    let address = $("#txtAddress").val();
    let payment = $("#paymentMethod").val();
    let color = $("#txtColor").val();
    let user=new User(email,password,fname,lname,age,phone,address,payment,color);//creating an instance
    if(isValid(user)){
        $("#usersTable").append(createRow(user));
    }
        console.log(user);
}

function init(){
    console.log("Init function");

}
window.onload=init;