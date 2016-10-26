import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { StadtanzeigerAnnouncementComponent } from './announcement/announcement.component';
import { StadtanzeigerComponent } from './stadtanzeiger.component';
import { StadtanzeigerAnnouncementCreateComponent } from './announcement/create/create.component';

@NgModule({
	declarations: [
		StadtanzeigerAnnouncementComponent,
		StadtanzeigerAnnouncementCreateComponent,
		StadtanzeigerComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule.forRoot(),
	],
	bootstrap: [
		StadtanzeigerComponent,
	],
})
export class StadtanzeigerModule { }
