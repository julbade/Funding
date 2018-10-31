import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../projnchar.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})

export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }


  ngOnInit() {
  }
  beginUpdatingProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }
  beginDeletingProject(projectToDelete) {
    if (confirm("We are not happy about this.")) {
      this.projectService.deleteProject(projectToDelete);
    }
  }
}