import {FC, memo} from 'react';
import ReactHtmlParser from 'react-html-parser';

import {BibItem} from '../../../data/dataDef';

const Bibliography: FC<{item: BibItem}> = memo(({item}) => {
  const {doi_url, content} = item;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      {/* <a href={doi_url}>{content}</a> */}
      <a href={doi_url}>{ReactHtmlParser(content)}</a>
    </div>
  );
});

Bibliography.displayName = 'Bibliography';
export default Bibliography;
