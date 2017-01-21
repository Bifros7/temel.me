import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MdSnackBar } from '@angular/material';

@Component({
	selector: 'stadtanzeiger-announcement-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
})
export class StadtanzeigerAnnouncementCreateComponent {
	@Output() public createAnnouncement: EventEmitter<Object> = new EventEmitter<Object>();

	public form: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _snackBar: MdSnackBar
	) {
		this.form = this._formBuilder.group({
			anonymous: [false],
			email: [''],
			password: [''],
			price: [''],
			street: [''],
			title: [''],
			town: [''],
			zipCode: [''],
		});
	}

	public submit(): void {
		let message: string = 'The announcement could not be created, please re-check the form!';

		if (this.form.valid) {
			message = "The announcement has been created!"
			this.createAnnouncement.emit(this.form.value);
			this.form.reset();
		}
		this._snackBar.open(message, null, {
			duration: 3000,
		});
	}
}
