import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../model/course';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = ''

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      tap(courses => console.log(courses))
    )
  }
}
