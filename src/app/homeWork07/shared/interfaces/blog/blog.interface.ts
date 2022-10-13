export interface IBlogRequest {
	title:string,
	description:string,
	author:string,
	imgPath: string
}

export interface IBlogResponse extends IBlogRequest {
	id:number,
}