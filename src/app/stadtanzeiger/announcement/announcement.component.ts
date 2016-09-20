import { Component, Input, OnInit } from '@angular/core';

import { StadtanzeigerAnnouncementModel } from './announcement.model';

@Component({
	selector: 'stadtanzeiger-announcement',
	templateUrl: './announcement.component.html',
	styleUrls: ['./announcement.component.css']
})
export class StadtanzeigerAnnouncementComponent {
	@Input() announcementModel: StadtanzeigerAnnouncementModel;
}
