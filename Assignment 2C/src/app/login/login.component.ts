import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;

  users: any[] = []

  addUser(uname:any,email:any,password:any) {
    var data = {"uname" : uname,"email":email,"password":password}
    if(uname == "" || email == "" || password == ""){
      alert("Please fill all details!!")
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      alert("Invalid email!!")
    }
    else if(password.length > 15 || password.length < 7){
      alert("Password must be 7 to 15 characters long!!")
    }
    else if(this.users.findIndex((item,index) => {
      if(item.uname == uname && item.email == email){
        return index;
      }
      return -1;
    }) != -1 ){
      alert("User already exists!!")
    }
    else{
      alert("User added successfully!!")      
      this.users.push(data)
    }    
  }

  removeUser(user:any){
    var data = {"uname":user.uname,"email":user.email}
    this.users.forEach((item,index) => {if(item === user) this.users.splice(index,1);});   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
