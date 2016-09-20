import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdCoreModule } from '@angular2-material/core';
import { MdIconModule } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

import { HomeModule } from './home/home.module';
import { StadtanzeigerModule } from './stadtanzeiger/stadtanzeiger.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,

		MdButtonModule.forRoot(),
		MdCoreModule.forRoot(),
		MdIconModule.forRoot(),
		MdListModule.forRoot(),
		MdSidenavModule.forRoot(),
		MdToolbarModule.forRoot(),
		MdTooltipModule.forRoot(),

		routing,

		HomeModule,
		StadtanzeigerModule,
	],
	providers: [
		appRoutingProviders,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
