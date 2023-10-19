import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassModel } from 'src/app/model/class-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }
  getClasses(): Observable<ClassModel[]>{
    return this.httpClient.get<ClassModel[]>('http://localhost:9000/api/v1/class' + '/list').pipe(map(res => res));
  }
  saveClass(request: any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:9000/api/v1/class' + '/save', request).pipe(map(resp => resp));
  }
  updateClass(request: any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:9000/api/v1/class' + '/update', request).pipe(map(resp => resp));
  }
  deleteClass(id: number): Observable<any>{
    return this.httpClient.get<any>('http://localhost:9000/api/v1/class' + '/delete/' + id).pipe(map(resp => resp));
  }
}
