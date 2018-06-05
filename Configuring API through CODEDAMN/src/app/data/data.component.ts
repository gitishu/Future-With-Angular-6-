import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';
import {HelloComponent} from  '../hello/hello.component';
import {HttpClientModule} from '@angular/common/http'


interface myData{
  obj: Array<Object>//this interface specifies what kind of response i am expecting   
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  records = []
  

  constructor(private myFirstService: RecordsService) {//this.records=[] 
  }
  
  ngOnInit() {
  	// this.myFirstService.getData().subscribe(data =>{
  	// console.log("We got the",data.obj);
  	  // this.records = data.obj; //m imp line here 
  // })
  // this.records=(this.myFirstService.getData());//subscriptions ko hcode abhi netiher it can works on the object or on the array of objects returned from the service method jisko hamne call kiya hai 

  this.myFirstService.getData().subscribe(data=>{
      this.records=data.obj;
    })


}


}	

