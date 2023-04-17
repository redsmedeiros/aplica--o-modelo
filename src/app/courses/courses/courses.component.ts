import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category', 'actions']

  constructor(private courseService: CoursesService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute){

    this.courses$ = courseService.findAll().pipe(
      catchError( error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    )
  }

  ngOnInit(): void {

  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

  onAdd(): void{
    console.log('teste')
    this.router.navigate(['new'], {relativeTo: this.activatedRoute})
  }



}
