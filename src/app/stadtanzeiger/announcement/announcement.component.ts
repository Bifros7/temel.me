import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'stadtanzeiger-announcement',
	templateUrl: './announcement.component.html',
	styleUrls: ['./announcement.component.css']
})
export class StadtanzeigerAnnouncementComponent {
	@Input() announcement: any;
}
