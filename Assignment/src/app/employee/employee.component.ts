import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSaved = false;
  employeeForm: any;
  employeeIdUpdate = null;
  message = "";
  
 

  constructor(private formbulider: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.formbulider.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
    });
    
  }
  onFormSubmit() {
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    console.log(this.employeeForm.value);
    this.CreateEmployee(employee);
    this.employeeForm.reset();
  }

  CreateEmployee(employee: Employee) {
      this.employeeService.createEmployee(employee).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record saved Successfully';
          this.employeeIdUpdate = null;
          this.employeeForm.reset();
        }
      );
      }
}
