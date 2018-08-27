import { Component } from '@angular/core';

@Component({
    selector: 'ap-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    
    private isShow = false;

    toggle() {
        this.isShow = !this.isShow;
    }
}