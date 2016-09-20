import { StadtanzeigerAnnouncementCategories } from '../announcementcategories';

export class StadtanzeigerAnnouncementCreateModel {
	constructor(
		public anonymous: boolean = false,
		public category: StadtanzeigerAnnouncementCategories = StadtanzeigerAnnouncementCategories.Computer,
		public description: string = '',
		public email: string = '',
		public password: string = '',
		public street: string = '',
		public title: string = '',
		public town: string = '',
		public zipCode: number = null
	) {}
}
