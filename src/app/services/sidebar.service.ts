import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    submenu: [
      { title: 'Main', url:'' },
      { title: 'Progress Bar', url: 'progress' },
      { title: 'Charts', url: 'graphic' },
      { title: 'Promises', url: 'promises' },
      { title: 'Rxjs', url: 'rxjs' }
    ]

  }]
  constructor() { }
}
