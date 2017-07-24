import { Component } from '@angular/core';
import { Employee} from './employee';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent {
  public title = 'Componente Empleados:';
  public employee: Employee;
  public employees: Array<Employee>;
  public extEmployee: boolean;
  public color: string;
  public selectedColor: string;

  constructor() {
    this.employee = new Employee('John Arias', 45, 'Developer', true);
    this.employees = [
      new Employee('Angie Cruz', 25, 'Quality', true),
      new Employee('Jesus Christ', 1005, 'Savior', true),
      new Employee('John Arias', 24, 'Developer', false)
    ];
    this.extEmployee = false;
    this.color = 'green';
    this.selectedColor = '#ccc';
  }

  ngOnInit() {
    console.log(this.employees);
  }

  changeExtern(value) {
    this.extEmployee = value;
  }
}
