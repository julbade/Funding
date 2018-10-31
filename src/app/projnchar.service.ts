import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Charity } from './charity.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  charities: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('Projects');
    this.charities = database.list('Charities');

  }

  getProjects() {
    return this.projects;
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string) {
    return this.database.object('Projects/' + projectId);
  }
  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({
      title: localUpdatedProject.title,
      agent: localUpdatedProject.agent,
      description: localUpdatedProject.description,
      money: localUpdatedProject.money
    });
  }
  deleteProject(localProjectToDelete) {
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

// 

  getCharity() {
    return this.charities;
  }

  addCharity(newCharity: Charity) {
    this.charities.push(newCharity);
  }

  getCharityById(charityId: string) {
    return this.database.object('Charities/' + charityId);
  }
  updateCharity(localUpdatedCharity) {
    var charityEntryInFirebase = this.getCharityById(localUpdatedCharity.$key);
    charityEntryInFirebase.update({
      title: localUpdatedCharity.title,
      agent: localUpdatedCharity.agent,
      description: localUpdatedCharity.description,
      money: localUpdatedCharity.money
    });
  }
  deleteCharity(localCharityToDelete) {
    var charityEntryInFirebase = this.getCharityById(localCharityToDelete.$key);
    charityEntryInFirebase.remove();
  } 
}
