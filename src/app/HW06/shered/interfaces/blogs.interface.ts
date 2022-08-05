export interface IUsers {
	id: number,
	username: string,
	email: string,
	password: string,
}

export interface IBlogss {
	id: string,
	topic: string,
	postedBy: string,
	date:Date,
	message: string,
}