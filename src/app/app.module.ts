import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { CompanyModule } from './company/company.module';
import { ConwayModule } from './conway/conway.module';
import { HomeModule } from './home/home.module';
import { StadtanzeigerModule } from './stadtanzeiger/stadtanzeiger.module';
import { NavigationitemComponent } from './navigationitem/navigationitem.component';

import 'hammerjs';

@NgModule({
	declarations: [
		AppComponent,
		NavigationitemComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		HttpModule,
		MaterialModule,

		routing,

		CompanyModule,
		ConwayModule,
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
