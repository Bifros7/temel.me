export class NavigationitemModel {
	constructor(
		public children: Array<NavigationitemModel> = [],
		public description: string = 'info',
		public icon: string = '',
		public routerLink: string = ''
	) {}
}
