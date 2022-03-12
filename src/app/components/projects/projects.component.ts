import { Component, OnInit } from '@angular/core';

//Models
import { Projects } from '../../interfaces/IProjects'

//Services
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = []; 

  constructor(public _projectsService:ProjectsService) { }

  ngOnInit(): void {
    this._projectsService.getPeriods().subscribe((res)=>{
      this.projects = res;
      console.log(this.projects);
           
    })
  }

  handleRedirect(enlace: string){
    window.location.href = enlace;
  }

  numeroPrimo(numero: number){
    // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
  }

}
