export class StadtanzeigerAnnouncementModel {
	constructor(
		public anonymous: boolean = false,
		public description: string = '',
		public firstName: string = '',
		public lastName: string = '',
		public street: string = '',
		public title: string = '',
		public town: string = '',
		public zipCode: number = null
	) {}
}
