import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', link: '/dashboard' },
        { titulo: 'Gráficas', link: 'grafica1' },
        { titulo: 'ProgressBar', link: 'progress' },
        { titulo: 'Promesas', link: 'promesas' },
        { titulo: 'Rxjs', link: 'rxjs' },
      ]

    }
  ]; 

  constructor() { }
}
