import { memo } from 'react';
import { SORT_ALPHABET } from '../../types';

const SuggestionView = ({ data, match, sort, badge }: PropsType) => {
  const matchIndex = data.findIndex((elem: string) => elem === match);
  const part_1 = matchIndex !== -1 && data.slice(0, matchIndex);
  const part_2 = matchIndex !== -1 && data.slice(matchIndex + 1, data.length);

  if (matchIndex === -1 || sort === SORT_ALPHABET) {
    return (
      <UlContainer>
        {data.length === 0 ? (
          <div className='w-full h-full flex justify-center items-center uppercase text-[20px]'>
            Nothing Found
          </div>
        ) : (
          MakeItems(match, data, 0, badge)
        )}
      </UlContainer>
    );
  } else {
    return (
      <UlContainer>
        {MakeItems(match, [match], 0, badge)}
        {part_1 ? MakeItems(match, part_1, 1, badge) : <></>}
        {part_2 ? (
          MakeItems(match, part_2, part_1 ? part_1.length + 1 : 1, badge)
        ) : (
          <></>
        )}
      </UlContainer>
    );
  }
};

const MakeItems = (
  match: string,
  data: Array<string>,
  startIndex: number,
  badge: boolean
) => {
  return data.map((one, index) => (
    <li
      key={index}
      className='group relative w-full even:bg-li-even cursor-pointer p-[10px_20px_10px_100px] overflow-hidden flex justify-between'
    >
      <div className='absolute top-1/2 -left-[10px] -translate-y-1/2 w-[80px] h-[80px] bg-dark group-odd:bg-li-even p-[18px] rounded-full'>
        <div className='w-full h-full rounded-full bg-li-even group-odd:bg-dark flex justify-center items-center'>
          {startIndex + index + 1}
        </div>
      </div>
      <span className={match === one ? 'text-white' : ''}>{one}</span>
      {one === match ? (
        <span className='bg-[#3fa568] text-[12px] flex justify-center items-center p-[4px_10px] rounded-full'>
          MATCH
        </span>
      ) : (
        badge && (
          <span className='bg-[#7c96d7] text-[12px] flex justify-center items-center p-[4px_10px] rounded-full'>
            SUGGESTION
          </span>
        )
      )}
    </li>
  ));
};

interface ContainerType {
  children?: any;
}

const UlContainer = ({ children }: ContainerType) => {
  return (
    <ul className='suggestion-view mt-4 h-[400px] bg-dark rounded-2xl overflow-y-auto'>
      {children}
    </ul>
  );
};

interface PropsType {
  data: Array<string>;
  sort: string;
  match: string;
  badge: boolean;
}

export default memo(SuggestionView);
