import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';//NgModel is a directive in an FormsModule which is a part of a form  
// we are importing this which is an independent module capable of running stangdalone...



import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {RecordsService} from './records.service';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';



@NgModule({//this is the root decorator sabse different type ka decorator hai ye ok.....
    //it is used to add components and directives and other stuff like pipes in to the application  
  declarations: [//here compoenents ki declarations hoti hai 
    AppComponent,//here this is the root component 
    HelloComponent, HomeComponent, DataComponent
  ],
    
  imports: [//we imported router module back in to our apps through the imports 
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([//by different kind of way we are importing the router module 
    				//we defined our routes for this application here 
    		{
    			path: 'data',//localhost:4200/data (whenever that hits it would renders the component defined below)
    			component: DataComponent
    		},
        // {
        //   path: '/',
        //   component: AppComponent
        // },
    		{ //disadvantages are localhost/path1/path2 and other path is localhost/path1
    			// then in first path compoenent for 2 path will be rendered  
    			path: '',//2 keys are there in this object 
    			component: HomeComponent //angular router runs on the first serve strategy 
    		}//we are writing an object here 
    		// once it gets the path match it would render that component in to an html tag
		])


    //with this import i'm defining how my router should look like...it accepts the 1 parameter as an array of routes  
	//forms module me NgModel hai//no need to import this root decorator here because ham usi ke andar to define kar rhe hai  
  ],
  providers: [RecordsService],//service providers they are used to inject services

  //if i inject the service to the provider here ..then our service will be available to the every compoennt 
  // in my application which requests it 




  bootstrap: [AppComponent]//our application starts from the app component here this bootstrap from the app component or we can say that 
  // here ham bootstrap karenge app component ko  
})
export class AppModule { }//component ki class export karani hai bas 
