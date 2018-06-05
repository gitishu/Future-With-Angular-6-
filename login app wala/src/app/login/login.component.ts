import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//after initialisation of the 
	// AppComponent then ye sari components ab activate ho sakte hai

  constructor(private myAuthService: AuthService) { }

	loginUser(event){
		event.preventDefault();
		const target  = event.target;
		console.log("hello works fine!",event);
		const username = target.querySelector('#username').value;
		const password = target.querySelector('#password').value;
		

		console.log(username,password);//function for printing in the browser  

		this.myAuthService.getUserDetails(username,password)
			.subscribe(
				data=>{
				if(data.success){
				console.log("my data or response gets here in the component file",data)
				//redirect the person to the admin 
			}else {
				window.alert(data.message)
			}
			},
			(err: HttpErrorResponse)=>{//it is a parameter here 
				



			});	




	}//yha methods aayenge 

  ngOnInit() {


  	// this.myAuthService.getUserDetails()
  	// 	.subscribe(data=>{


  		

  	// 	},(err: HttpErrorResponse)=>{





  	// 	})




  }

}
