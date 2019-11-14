import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import experienceData from '../experience-data.json';
import { ExperienceData } from '../core/index.js';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  username: string;
  expData: ExperienceData;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.username = params.get('name');
    });
    this.setExperience();
   }
  ngOnInit() {
  }

  setExperience() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < experienceData.length; i++) {
      if (experienceData[i].username === this.username) {
        this.expData = experienceData[i];
        break;
      }
    }
  }
}
