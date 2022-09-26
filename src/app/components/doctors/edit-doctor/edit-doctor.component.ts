import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctorDetails: Doctor = {
    id:'', //0
    position:'',
    firstname:'',
    lastname:'',
    place:''

  };

  constructor(private route: ActivatedRoute, private doctorService: DoctorsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id =  params.get('id');

        if (id) {
        this.doctorService.getDoctor(id)
        .subscribe({
          next: (response) => {
            this.doctorDetails = response; 
          }
        })
        }

      }
    
    })
    
  }

  updateDoctor() {
    this.doctorService.updateDoctor(this.doctorDetails.id, this.doctorDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['doctors']);
      }
    });

  }

  deleteDoctor(id: string) {
    this.doctorService.deleteDoctor(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['doctors']);
      }
    })

  }
}
