type Image = {
	id: string;
	author: string;
	url: string;
}

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}