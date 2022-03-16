import { style } from '@angular/animations';
import {AfterViewInit, Component, OnInit } from '@angular/core';

import { categoriesItem } from '../../constants/enums';

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.scss']
})
export class GridListViewComponent implements OnInit,AfterViewInit {

  elements : any;
  container : any;
  items:any = []
  mobiles = categoriesItem;

  constructor() { }

  ngOnInit(): void {

    this.items = categoriesItem;
      this.elements = document.getElementsByClassName("column");
      this.container = document.getElementById("btnContainer");
      let btns = this.container.getElementsByClassName("btn");;

    
 
  // console.log(this.items);

  }


  ngAfterViewInit(){
    this.listView()
    this.items = categoriesItem.sort((a:any,b:any)=>{
      return a.price-b.price;
    })
  }

  // list View
   listView() {
  
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "46%";
      this.elements[i].style.margin = "10px";
      document.getElementsByClassName("btn")[0].classList.add("active");
      document.getElementsByClassName("btn")[1].classList.remove("active");
    }
  }
  
  // Grid View
   gridView() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "21%";
      this.elements[i].style.margin = "10px";
      document.getElementsByClassName("btn")[1].classList.add("active");
      document.getElementsByClassName("btn")[0].classList.remove("active");
    }
  }
  
  onChange(ev:any){
    console.log(ev.target.value);

    if(ev.target.value==1){
      this.items = []
     let data = JSON.stringify(this.mobiles);
      let mobileData = JSON.parse(data);
      this.items = mobileData;
    }

    if(ev.target.value==2){
      this.items=this.items.sort((a:any,b:any)=>{
        return a.price-b.price;
      })
    }

    if(ev.target.value==3){
      this.items= this.items.sort((a:any,b:any)=>{
        return b.price-a.price;
      })
    }
  }


  
  
}
