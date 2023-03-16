import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
   public title="Hello from BridgeLabz";
   public url="../../assets/BridgeLabz-Logo-2.png";
  public bzurl="https://www.bridgelabz.com/";

  onClick($event:any){
    console.log("Save button is clicked", $event);
    window.open(this.bzurl,"_blank");
  }
}
