import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  doctors: Doctor[] = [];
  constructor(private doctorsServices: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsServices.getAllDoctors()
    .subscribe({
      next: (doctors) => {
        this.doctors = doctors;
        
      },
      error: (response) => {
        console.log(response);
      }
    }) 

  }

}
