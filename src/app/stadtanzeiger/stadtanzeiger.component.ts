import { Component } from '@angular/core';

@Component({
	selector: 'stadtanzeiger',
	templateUrl: './stadtanzeiger.component.html',
	styleUrls: ['./stadtanzeiger.component.css']
})
export class StadtanzeigerComponent {
	public announcements: Array<Object> = [];

	public createAnnouncement(announcement: Object): void {
		this.announcements.push(announcement);
	}
}
