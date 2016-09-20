import { Component, EventEmitter, Output } from '@angular/core';

import { StadtanzeigerAnnouncementCreateModel } from './create.model';

@Component({
	selector: 'stadtanzeiger-announcement-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class StadtanzeigerCreateComponent {
	@Output() public createAnnouncement: EventEmitter<StadtanzeigerAnnouncementCreateModel> = new EventEmitter<StadtanzeigerAnnouncementCreateModel>();

	private _createModel: StadtanzeigerAnnouncementCreateModel = new StadtanzeigerAnnouncementCreateModel();

	private _createAnnouncement(form: any): void {
		if (form.valid) {
			this.createAnnouncement.emit(this._createModel);
		}
	}
}
