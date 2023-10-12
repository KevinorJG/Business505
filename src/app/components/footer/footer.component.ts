import { Component } from '@angular/core';
import { BlogInfo } from 'src/app/models/DataInfo';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  infoBlog: BlogInfo;
  constructor(private database: DatabaseService) {
    database.getInfoBlog().subscribe((data) => {
      data.flatMap((item) => {
        this.infoBlog = item;
      })
    })
    
  }
}
