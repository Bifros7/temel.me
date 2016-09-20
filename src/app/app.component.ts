import { Component } from '@angular/core';

import { AppNavigationModel } from './navigation.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private _views: Array<AppNavigationModel> = [
		new AppNavigationModel(
			'Home',
			'Home',
			'home',
			'/home'
		),
		new AppNavigationModel(
			'Sindelfinger Stadtanzeiger',
			'Lokalanzeigen',
			'assignment ind',
			'/stadtanzeiger'
		)
	];

	private _openGitHubRepository(): void {
		location.href = 'https://github.com/Bifros7/temel.me';
	}
}
