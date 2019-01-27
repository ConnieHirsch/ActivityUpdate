import { Component, Input, EventEmitter, Output } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent {
  changeCounter:number = 0;

  constructor(private usersService: UsersService,
    private counterService: CounterService){}

    ngOnInit() {
      this.changeCounter = this.counterService.changeCounter;
      }
}
