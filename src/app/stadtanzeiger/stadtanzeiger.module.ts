import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdCoreModule } from '@angular2-material/core';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdRadioModule } from '@angular2-material/radio';
import { MdTabsModule } from '@angular2-material/tabs';

import { StadtanzeigerAnnouncementComponent } from './announcement/announcement.component';
import { StadtanzeigerComponent } from './stadtanzeiger.component';
import { StadtanzeigerCreateComponent } from './announcement/create/create.component';

@NgModule({
	declarations: [
		StadtanzeigerAnnouncementComponent,
		StadtanzeigerComponent,
		StadtanzeigerCreateComponent,
	],
	imports: [
		CommonModule,
		FormsModule,

		MdButtonModule.forRoot(),
		MdButtonToggleModule.forRoot(),
		MdCardModule.forRoot(),
		MdCheckboxModule.forRoot(),
		MdCoreModule.forRoot(),
		MdIconModule.forRoot(),
		MdInputModule.forRoot(),
		MdListModule.forRoot(),
		MdRadioModule.forRoot(),
		MdTabsModule.forRoot(),
	],
	bootstrap: [
		StadtanzeigerComponent,
	],
})
export class StadtanzeigerModule { }
