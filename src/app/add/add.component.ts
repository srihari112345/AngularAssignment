import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../modal/modal.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  name: string;
  address: string;
  gender: string;
  employeeArray: IEmployee[] = [];
  constructor() { }

  ngOnInit() {
    const details = localStorage.getItem('employee');
    console.log(details);
    this.employeeArray = JSON.parse(details) || [];
  }

  onSubmit() {
    if (this.name !== '' && this.address !== '') {
      const employee: IEmployee = { 'name': this.name, 'address': this.address, 'gender': this.gender };
      this.employeeArray.push(employee);
      localStorage.setItem('employee', JSON.stringify(this.employeeArray));
    } else {
      alert('Enter the details');
    }
    this.name = '';
    this.address = '';


  }
}
