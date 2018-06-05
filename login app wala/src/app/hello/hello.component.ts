import { Component, OnInit } from '@angular/core';

@Component({//initialising this decorator here
  selector: 'app-hello',//it says that the selector should be app-hello
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']

  //or template can be 



    // template defined in the backquotes here ok valid !!
 //  template: `
	// <h2>Welcome {{name}}</h2>
	// <input type="text" ng-model="ishmeet" value="{{name}}"/>
 //    <p>ishmeet</p>


 //binding this id property (html property) of this input element to the DOM.
 // <input [id]="myid" /> 	
 // <input id="{{myid}}" />
 //interpolation only works with the string values  	
 //sometimes htmpl properties are the boolen properties not the string properties jisko hame bind karna hai 
 // like disabled which is the boolean property
 //  `

 // bind-disabled="true" this thing works same like below
 // <input [disabled]="true" /> use property binding like this 
 // we can control the property based oon the user interaction 



    

})
export class HelloComponent implements OnInit {//it is implementing the oninit method... lifecycle hooks samajh lena 
	//this is called as the component class
	// cant perform assignments and access global javascript var
	 
  // $scope.name="ishmeet";
  // pulic name = "ishmeet";//interpolation	
  // myvariable="names";
  constructor() {

   }//jo yha pe kaam karvana hai hame yha pe vo aayega
   //attribute values cant change once they are initialised but property values can be  changed 
  ngOnInit() {//here when angular invokes this thing tab yeh aayega
  // myvariable="raushan";
  }
}

