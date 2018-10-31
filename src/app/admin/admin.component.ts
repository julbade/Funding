import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../projnchar.service';
import { Charity} from '../charity.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]

})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  submitProject(title: string, agent: string, description: string, money: number) {
    var newProject: Project = new Project(title, agent, description, money);
    this.projectService.addProject(newProject);

  }

  submitCharity(title: string, agent: string, description: string, money: number) {
    var newCharity: Charity = new Charity(title, agent, description, money);
    this.projectService.addProject(newCharity);

  }
}