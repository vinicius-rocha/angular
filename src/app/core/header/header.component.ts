import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.serrvice';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;
    user: User;

    constructor(userService:UserService){
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }
}