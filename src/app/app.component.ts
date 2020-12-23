import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // `
  // <h2>
  // Welcome
  // </h2>

  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'myFirstAngularApp';
  public greeting = ''
  public greeting2 = ''
  public name = 'Fedi Gammoudi'
  public name2 = ''
  public message= ""

  onClick(event: any) {
    console.log('Welcome to Codevolution');
    this.greeting = event.type
  }
  logMessage(value: any) {
    console.log(value);
    this.greeting2 = value
  }

}

