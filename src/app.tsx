import './app.css';
import Gallery from "./components/gallery/gallery";
import {useEffect, useState} from "react";
import FetchService from "./services/fetchService";
import Button from "./components/button/button";

function App() {
    const [page, setPage] = useState<number>(1);
    const [pictures, setPictures] = useState<Image[]>();
    const templates = [
        `
			'a a a'
			'a a a'
			'b c c'
		`,
        `
			'a a a'
			'a a a'
			'b b c'
		`,
        `
			'a a b'
			'a a b'
			'a a c'
		`,
        `
			'a a b'
			'a a c'
			'a a c'
		`,
        `
			'a b b'
			'a b b'
			'c b b'
		`,
        `
			'a b b'
			'c b b'
			'c b b'
		`,
        `
			'a a b'
			'a a b'
			'c c c'
		`,
        `
			'a b b'
			'a b b'
			'c c c'
		`,
        `
			'a a a'
			'c c b'
			'c c b'
		`,
        `
			'a a a'
			'c b b'
			'c b b'
		`,
        `
			'a a a'
			'b b b'
			'c c c'
		`,
        `
			'a b c'
			'a b c'
			'a b c'
		`,
    ]
    const randomTemplate = (): string => {
        const idx = Math.ceil(Math.random() * templates.length);
        return templates[idx];
    }
    const prevPageHandler = () => {
        setPage(page - 1);
    }
    const nextPageHandler = () => {
        setPage(page + 1);
    }
    useEffect(() => {
        FetchService
            .getItems(`https://picsum.photos/v2/list?page=${page}&limit=${3}`)
            .then(data => {
                setPictures(data.map((d: Image & { download_url: string })  => {d.url = d.download_url; return d;}))
            })
        ;
    }, [page])
    return (
        <div className="app">
            { pictures && <Gallery pictures={pictures} template={randomTemplate()} /> }
            { page > 1 && <Button title={`prev`} onClickEvent={prevPageHandler} /> }
            <Button title={`next`} onClickEvent={nextPageHandler} />
        </div>
    );
}

export default App;
