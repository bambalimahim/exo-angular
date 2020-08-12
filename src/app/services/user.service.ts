import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [];
  userSubject = new Subject<any[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    console.log(this.users)
    this.users.push(user);
    this.emitUsers();
  }
}