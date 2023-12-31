import { Component } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    user: User = new User("", "", 0, "");
    message: any;

    constructor(private service:UserRegistrationService) {}

    public registerNow() {
        let resp = this.service.doRegistration(this.user);
        resp.subscribe((data) => this.message = data);
    }
}
