import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
  // Dramatis Personae
  activeUsers = ['Eleanor', 'Chidi', 'Tahani'];
  inactiveUsers = ['Michael', 'Janet', 'Jason'];

  constructor(private counterService: CounterService){}

  activityUpdated = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.recordStatusChange("Inactive");
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.recordStatusChange("Active");
  }
}