export interface IEventCategory {
   _id: string,
   label: string,
   subTitle: string,
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}

export interface IEvent {
   _id?: string,
   image: string,
   label: string,
   subTitle: string,
   postedOn: Date,
   description: string,
   bannerImage: string,
   active: boolean,
   categoryId: IEventCategory,
   createdAt?: string;
   updatedAt?: string;
}
