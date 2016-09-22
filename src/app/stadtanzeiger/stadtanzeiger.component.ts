import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'stadtanzeiger',
	templateUrl: './stadtanzeiger.component.html',
	styleUrls: ['./stadtanzeiger.component.css']
})
export class StadtanzeigerComponent {
	private _announcements: Array<Object> = [];

	private _createAnnouncement(announcement: Object): void {
		this._announcements.push(announcement);
	}
}
