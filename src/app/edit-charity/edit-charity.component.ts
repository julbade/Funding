import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../projnchar.service';


@Component({
  selector: 'app-edit-charity',
  templateUrl: './edit-charity.component.html',
  styleUrls: ['./edit-charity.component.css']
})


export class EditCharityComponent implements OnInit {
  @Input() selectedCharity;

  constructor(private projectService: ProjectService) { }


  ngOnInit() {
  }
  beginUpdatingCharity(charityToUpdate) {
    this.projectService.updateProject(charityToUpdate);
  }

  beginDeletingCharity(charityToDelete) {
    if (confirm("We are not happy about this.")) {
      this.projectService.deleteCharity(charityToDelete);
    }
  }
}