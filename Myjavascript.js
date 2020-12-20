var UserNameRegistervalue = [];
var PasswordRegistervalue = [];
document.getElementById('Loginidvalue').onclick = function Register() {
    
    var UserNameRegister =  document.getElementById("usernameregister").value;
    var PasswordRegister = document.getElementById("passwordregister").value;
   
    UserNameRegistervalue.push(UserNameRegister);
    PasswordRegistervalue.push(PasswordRegister);
    localStorage.setItem("UserNameRegistervalue", UserNameRegistervalue);
    localStorage.setItem("PasswordRegistervalue", PasswordRegistervalue);
    var storedName = [];
    var storedPass = [];
    storedName = localStorage.getItem("UserNameRegistervalue");
    
    storedPass = localStorage.getItem("PasswordRegistervalue");
    
    if (UserNameRegister == storedName && PasswordRegister == storedPass) {
        document.getElementById("register-form").classList.add('hide');
        document.getElementById('groceryPage').classList.remove("hide");
        
    }
    else {
        document.getElementById("register-form").classList.add('hide');
        document.getElementById('groceryPage').classList.remove("hide");
    }

 

 }
document.getElementById("save").onclick = function Save() {
    debugger;
    var number = document.getElementById("list");
    var itemlist = document.getElementById("item").value;
    if (number.children != null && number.children.length < 5) {
        Addgroceries(itemlist);
    } else {
        document.getElementById('warning-message').classList.remove("hide");
        
    }
    
    
}





function Addgroceries(element) {
    let listItem = document.createElement("li");
    listItem.setAttribute('data-element', element)

    let listText = document.createTextNode(element);

    let buttonval = document.createElement("BUTTON");
    let buttonText = document.createTextNode('Delete')
    buttonval.appendChild(buttonText);
    buttonval.setAttribute('class', 'deleteButton');
    buttonval.setAttribute('id', element);
    buttonval.setAttribute('onclick', 'deleteItem(\'' + element + '\')');

    listItem.appendChild(listText);
    listItem.append(btn);

    document.getElementById('list').appendChild(listItem);
}

function deleteItem(element) {

    
    document.getElementById('warning-message').classList.add('hide');
    
    document.getElementById(element).parentNode.remove()
    
}


