import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
import { ContainerComponent } from './container/container.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  section = [
    {'background': true, 'down-scroll': false, 'up-scroll': true},
    {'background': true, 'down-scroll': false, 'up-scroll': true},
    {'background': true, 'down-scroll': false, 'up-scroll': true}
  ];

  setSection(num) {
    [0, 1, 2].forEach(item => {
        if (item >= num) {
           this.section[item].background = true;
           this.section[item]['down-scroll'] = false;
           this.section[item]['up-scroll'] = true;
        }
        else {
          this.section[item].background = true;
          this.section[item]['down-scroll'] = true;
          this.section[item]['up-scroll'] = false;
        }
    });
  };

    /*section = {'search':true, 'airlines':false, 'airports':false };*/
  activeSection(section){
    if (section.search) this.setSection(0);
    if (section.airlines) this.setSection(1);
    if (section.airports) this.setSection(2);
  }

}
