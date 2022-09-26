import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable <Doctor[]> {
    return this.http.get<Doctor[]>(this.baseApiUrl + '/api/doctors');


  }

  addDoctor(addDoctorRequest: Doctor): Observable<Doctor>  {
    addDoctorRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Doctor>(this.baseApiUrl + '/api/doctors', addDoctorRequest);
  }

  getDoctor(id: string): Observable<Doctor>  {
    
     return this.http.get<Doctor>(this.baseApiUrl + '/api/doctors/' + id);
  }

  updateDoctor(id: string, updateDoctorRequest: Doctor): Observable<Doctor>  {
    
    return this.http.put<Doctor>(this.baseApiUrl + '/api/doctors/' + id, updateDoctorRequest);
 }

  deleteDoctor(id: string): Observable<Doctor>  {
    return this.http.delete<Doctor>(this.baseApiUrl+ '/api/doctors/' + id);
  }


}
