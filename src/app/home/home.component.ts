import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serviceMessage: any = {};
  student: any = {};

  constructor(private dataService: DataService) { }
  ngOnInit() {
  }

  submit(student: NgForm) {
    this.dataService.save(student).subscribe(
      () => this.serviceMessage = "Success!",
      error => console.error(error)
    );
  }
}
