import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <!-- <h2 *ngIf="true">
    {{"Welcome " + name | uppercase | slice:12:19}}<br>
    {{"Welcome " + name | lowercase}}<br>
    {{"Welcome " + name | titlecase}}<br>
    {{"Welcome " + name | slice:12:19}}<br>
    {{ "aa" + object['id'] | json }}<br>
  </h2>  -->
  <h2 *ngFor="let employee of employees">
    <li>
      {{employee.id}}
      {{employee.name}}
      {{employee.age}}
    </li>
  </h2>



  <button (click)="firstEvent()">click Here</button>
  
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter();

  public employees = []

  constructor() { }

  ngOnInit(): void {
  }

  firstEvent() {
    this.childEvent.emit('Hello fedi')
  }

}
