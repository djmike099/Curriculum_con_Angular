import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  desc: boolean = true;
  indice: number = -1;
  proyectos: any[] = [{ titulo: '' },
  ]

  constructor(private router : Router){}

  onHover(i: number) {
    this.desc = false;
    this.indice = i
  }
  onLeave(i: number) {
    this.desc = true;
    this.indice = -1
  }
  goTo(ruta:string) {
    this.router.navigateByUrl(ruta)
  }
}
