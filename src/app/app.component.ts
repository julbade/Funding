import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: Observable<any[]>;
  title = "Du the Dew";
  constructor(db: AngularFireDatabase) {
    this.projects = db.list('project');
    }

    // selectedProject = null;
    // selectedCharity = null;
  }
