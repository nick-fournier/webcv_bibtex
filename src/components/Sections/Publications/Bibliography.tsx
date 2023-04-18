import parse from 'html-react-parser';
import {FC, memo} from 'react';

const Bibliography: FC<{item: string}> = memo(({item}) => {
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      {parse(item)}
      {/* {item} */}
    </div>
  );
});

Bibliography.displayName = 'Bibliography';
export default Bibliography;
