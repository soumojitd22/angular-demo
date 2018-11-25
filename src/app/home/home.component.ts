import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serviceMessage: any;
  isWaitingForRespone: boolean = false;
  submitBtn: String = "Submit";
  student: any = {};
  studentForm: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  submit(studentForm: NgForm) {
    this.isWaitingForRespone = true;
    this.submitBtn = "Please wait..";
    this.dataService.save(studentForm.value).subscribe(
      res => {
        console.log(res);
        this.serviceMessage = res.message;
        this.isWaitingForRespone = false;
        this.submitBtn = "Submit";
        studentForm.resetForm();
      },
      error => {
        console.error(error);
        this.serviceMessage = "Ahh!! Something went wrong..";
        this.isWaitingForRespone = false;
        this.submitBtn = "Submit";
      }
    );
  }
}
