import { Injectable } from '@angular/core';
import { Charity} from './charity.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CharityService {
  charity: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.charity = database.list('charitys');

  }

  getCharity() {
    return this.charity;
  }
  addCharity(newcharity: Charity) {
    this.charity.push(newcharity);
  }

  getCharityById(charityId: string) {
    return this.database.object('charity/' + charityId);
  }
  updatecharity(localUpdatedCharity) {
    var charityEntryInFirebase = this.getCharityById(localUpdatedCharity.$key);
    charityEntryInFirebase.update({
      title: localUpdatedCharity.title,
      agent: localUpdatedCharity.agent,
      description: localUpdatedCharity.description,
      money: localUpdatedCharity.money
    });
  }
  deletecharity(localCharityToDelete) {
    var charityEntryInFirebase = this.getCharityById(localCharityToDelete.$key);
    charityEntryInFirebase.remove();
  }
}