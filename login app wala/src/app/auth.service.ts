import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

//declare the interface here for defining the type of data that we want in get req


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	// data = [],
	 
  constructor(private http: HttpClient) {

   }


   getUserDetails(username,password){
   	// 	this.http.post("",{
   	// 		"Username": {{event.username}},
   	// 		Password: {{}}

  		// })
   	// 	}
   		return this.http.post("http://localhost:1600/auth.php",{
   				username,
   				password 
   				//data which we are sending here 
   		})//no need of this thing here 
   		// .subscribe(//we are subscribing to the asynchronous pipeline flow 
   		// 	data=>{
   		// 		console.log(data,"is what we got from the server")//this subscription method in our case is when the data is returned 				
   		// 	})
   }
}






