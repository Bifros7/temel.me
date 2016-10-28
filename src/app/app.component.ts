import { Component } from '@angular/core';

import { NavigationitemModel } from './navigationitem/navigationitem.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public views: Array<NavigationitemModel> = [
		new NavigationitemModel(
			[],
			'Home',
			'home',
			'/home'
		),
		new NavigationitemModel(
			[
				new NavigationitemModel(
					[],
					'Company',
					'business',
					'/company'
				),
				new NavigationitemModel(
					[],
					'Stadtanzeiger',
					'assignment',
					'/stadtanzeiger'
				),
			],
			'Example modules',
			'info',
			'',
		),
	];

	public openGitHubRepository(): void {
		location.href = 'https://github.com/PascalTemel/temel.me';
	}
}
