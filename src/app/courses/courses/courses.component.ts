import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category']

  constructor(private courseService: CoursesService){

    this.courses$ = courseService.findAll().pipe(
      catchError( error => {
        return of([])
      })
    )
  }

  ngOnInit(): void {

  }



}
