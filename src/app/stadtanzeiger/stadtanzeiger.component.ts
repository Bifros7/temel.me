import { Component, OnInit } from '@angular/core';

import { StadtanzeigerAnnouncementModel } from './announcement/announcement.model';

@Component({
	selector: 'stadtanzeiger',
	templateUrl: './stadtanzeiger.component.html',
	styleUrls: ['./stadtanzeiger.component.css']
})
export class StadtanzeigerComponent {
	private _announcements: Array<StadtanzeigerAnnouncementModel> = [];

	private _createAnnouncement(announcement: StadtanzeigerAnnouncementModel): void {
		this._announcements.push(announcement);
	}
}
