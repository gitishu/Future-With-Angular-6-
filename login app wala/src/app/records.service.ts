import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http'

//we are injecting the module inside this service
import {AppComponent} from './app.component'
	
interface myData {//it specifies that what kind of response i am expecting ..
      obj: Array<Object>//key thi ye string ki form me tabhi problems aa rhi thi 
}
//service me bhi to interfcae define karoge na tum 


@Injectable({//making the injectable decorator
// this tells angular that this service can also have some injectables in it so we need that decorative right here    
  providedIn: 'root'
})
export class RecordsService {//here we are defining the core functionality of the decorator 
  object= []	
  constructor(private http: HttpClient) { }//or here http client service accessign the data inside httpclient 
  // via this.http 
 

  getData(){//always follows the camel case 
	//this is a array of json objects which is called as ITERABLE DATA in angular
// 1))))	return this.http.get<myData>('http://localhost:1600/file.json');//epecting the kind of data to be returned 
// 	// here i am expecting the kind of data to be returned as an object which contains object right  
// 			console.log("hey there");

// this.object.push({//us array me hamne ye json object push kar dia yha pe 
// 	"api":{
//     "target": "http://localhost:1600",
//     "secure": false,
//     "changeOrigin": true//here log level as well as ..
//   }
// })

// console.log(this.object);
//2))) 
// return this.http.get<myData>(this.object[0].api.target+'/file.php');//ye append kar do and yha se data fetch kar lo
// /*2))) */return this.http.get<myData>('/api/file.php');
return this.http.get<myData>('http://localhost:1600/file.php');
			// .subscribe(data=>{//now we are having some event when this http module will return s us some data and we are subscriving to that event    
			// 	console.log("We got some ",data.obj)	
			// })






		//well this is the subscription operator of rxjs which is reactive javascript its just a way to 
		// handle asynchronous tasks  rxjs is based on the pipeline model  so for rxjs an asynchronous request can be 
		// thought of as a pipe where your endpoint would emit certain events every time and you can subscribe
		// to them   
	// return //{a:1}
	
	// return [ //this thing is ok ek dum
	
		 
		
	//  {
	//     name: 'Ishmeet',
	//     online: true 
	//  },

	//  {
	//     name: 'tarun',
	//     online: false
	//  }
	// ]
	 // return records;
  }//this service returns an array of json objects 

}

