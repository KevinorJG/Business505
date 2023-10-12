import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent  implements OnInit {

  public appPages = [
    {title: 'Inicio', url: 'home', icon: 'home'},
    {title: 'Emprendimientos', url: 'view-business', icon: 'business'},
    {title: 'Blog', url: 'admin-blog', icon: 'globe'},
  ];
  constructor() { }

  ngOnInit() {}

}
