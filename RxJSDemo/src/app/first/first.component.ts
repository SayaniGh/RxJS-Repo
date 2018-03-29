import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  val :string;
  num : any = 5;
  constructor() { }

  ngOnInit() {
    let observable = Observable.interval(1000); 
    
    var observer = {
      next : function(value){
      console.log(value);
      },
      error : function(value){
      console.log(value);
      } 

    }


  observable.subscribe(observer).unsubscribe();
  
  }

  clickedBtn(){
    for(let i = 1; i <= 5; i++){
      
    this.val=Math.random().toString();
    let obsrvble = Observable.of(this.val);
    
    let obsrvr = {
      next : function(value){
        this.val=value;
        console.log("next value ->",value)
      },
      error : function(value){
        console.log(value)
      },
      complete : function(){
        console.log("completed")
      }
    }
    let sub= obsrvble.subscribe(obsrvr);

    if(i==3){
      sub.unsubscribe();
    }

  }
  
  }
  
}
