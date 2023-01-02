import Cite from 'citation-js';
import {readFileSync} from 'fs';
import preval from 'next-plugin-preval';


async function getPublications() {
    console.log(process.cwd());
    const publicationsFile = readFileSync('src/data/publications.bib', 'utf-8');

    const publications = new Cite(publicationsFile).format(
        'bibliography', {
        format: 'html',
        template: 'apa',
        lang: 'en-US',
        nosort: true,
        }
    );
    return publications;
}

export default preval(getPublications());
