import { Injectable, Input, Output } from "@angular/core";
import { $ } from "protractor";

@Injectable()

export class CounterService {
   @Output() changeCounter:number = 0;

  recordStatusChange(statChange: string){
    this.changeCounter++;
    console.log("Changed to " + statChange + " / Number of changes: " + this.changeCounter);
    
  }
}