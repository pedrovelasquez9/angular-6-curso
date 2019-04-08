import { Usuarios } from './Usuarios';

export class Response{
	public page: number;
	public per_page: number;
	public total: number;
	public total_pages: number;
	public data: Array<Usuarios>;
}