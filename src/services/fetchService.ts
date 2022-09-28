//
// const MAX_IMAGES = 3;
// const images: Image[] = [];
//
// document.addEventListener('DOMContentLoaded', () => {
// 	console.log('document DOMContentLoaded');
// 	const items: NodeListOf<Element> = document.querySelectorAll('.item');
//
// 	getImages(items);
// });
//
// const getImages = (items: NodeListOf<Element>) => {
// .then(data => {
// 		data.forEach((image: Image, idx: number) => {
// 			const url = image.url;
// 			makeImgElement(items[idx], idx, url);
// 		})
// 		images.push(data);
// 	})
// }
//
// const makeImgElement = (parentNode: Element, index: number, url: string) => {
// 	const img = document.createElement('div');
// 	img.classList.add('picture');
// 	console.log(url)
// 	img.style.backgroundImage = `url(${url})`;
// 	parentNode.append(img);
// }

class FetchService {
	static getItems = async (url: string) => {
		return fetch(url, { method: 'get', headers: {
				'Content-Type': 'jsonp'
			} })
			.then(res => res.json())
		;
	}
}

export default FetchService;