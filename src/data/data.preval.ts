import Cite from 'citation-js';
import {readFileSync} from 'fs';
import preval from 'next-plugin-preval';


function addHref(html_string: string) {
    return html_string.replace(
        /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*))/g, 
        (x)=>'<a href="'+x+'">'+x+'</a>'
        );
}

async function getPublications() {
    const publicationsFile = readFileSync('src/data/publications.bib', 'utf-8');
    
    const publications = new Cite(publicationsFile).format(
        'bibliography', {
        format: 'html',
        template: 'apa',
        lang: 'en-US',
        nosort: true,
        }
    );

    return addHref(publications);
}

export default preval(getPublications());
