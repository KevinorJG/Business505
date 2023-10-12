import { Component } from '@angular/core';
import { BlogInfo } from 'src/app/models/DataInfo';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  infoBlog: BlogInfo;
  constructor(private database: DatabaseService) {
    database.getInfoBlog().subscribe((data) => {
      data.flatMap((item) => {
        this.infoBlog = item;
      })
    })
    
  }
}
