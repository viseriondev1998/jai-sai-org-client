export interface IDirector {
   name: string,
   description: string,
   image: string,
}

export interface INGOProfile {
   _id?: string,
   description: string,
   vision: string,
   mission: string,
   active: boolean,
   director: IDirector[],
   createdAt?: string;
   updatedAt?: string;
}
