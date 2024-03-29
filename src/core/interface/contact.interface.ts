export interface IContact {
   _id?: string,
   email: string,
   mobile: string,
   helplineNumbers: string[],
   address: string[],
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}

export interface IUserContact {
   message: string,
   fullName: string,
   email: string,
   subject?: string,
}