import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  addDoctorRequest: Doctor ={
    id:'', //0
    position:'',
    firstname:'',
    lastname:'',
    place:''
  };
  constructor(private doctorService: DoctorsService, private router: Router) { }

  ngOnInit(): void {
  }

  addDoctor() {
    console.log(this.addDoctorRequest);
    this.doctorService.addDoctor(this.addDoctorRequest)
    .subscribe({
      next: (doctor) => {
        console.log(doctor);
        this.router.navigate(['doctors']);

      }
    });

  }
}
