import { StadtanzeigerAnnouncementCategories } from './announcementcategories';

export class StadtanzeigerAnnouncementModel {
	constructor(
		public anonymous: boolean = false,
		public category: StadtanzeigerAnnouncementCategories = StadtanzeigerAnnouncementCategories.Computer,
		public description: string = '',
		public firstName: string = '',
		public lastName: string = '',
		public street: string = '',
		public title: string = '',
		public town: string = '',
		public zipCode: number = null
	) {}
}
