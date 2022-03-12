import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs";

@Injectable({ providedIn: "root" })
export class ProjectsService {
  

  constructor(private http: HttpClient, private router: Router) { }

  getPeriods() {
    return this.http
      .get<any>('https://pure-basin-97242.herokuapp.com/api/proyectos')
      .pipe(
        map((data) => {
          return data.data as any;
        })
      );
  }
}