import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'stadtanzeiger-announcement-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
})
export class StadtanzeigerCreateComponent {
	@Output() public createAnnouncement: EventEmitter<Object> = new EventEmitter<Object>();

	private _form: FormGroup;

	constructor(private _formBuilder: FormBuilder) {
		this._form = this._formBuilder.group({
			anonymous: [false],
			email: [''],
			password: [''],
			price: [''],
			street: [''],
			title: [''],
			town: [''],
			zipCode: [''],
		});

		this.createAnnouncement.subscribe(() => {
			this._form.reset();
		});
	}

	private _createAnnouncement(): void {
		if (this._form.valid) {
			this.createAnnouncement.emit(this._form.value);
		}
	}
}
