import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 status = ' Hay dien thong tin vao day';
 form: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
