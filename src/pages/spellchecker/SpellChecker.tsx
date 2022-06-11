import { useState } from 'react';
import { debounce } from 'lodash';

import Container from '../../components/containers';
import FormContainer from '../../components/containers/FormContainer';
import SuggestionView from './components/SuggestionView';
import SpellCheckForm from './components/SpellCheckForm';

// helper integrating with backend api
import spellCheck from '../../helper/spellCheck';
import OptionModal from './components/OptionModal';
import { OptionType } from './components/interfaces';
import { SORT_ALPHABET, SORT_MATCH } from '../types';
import Usage from './components/Usage';

const SpellChecker = () => {
  const [data, setData] = useState<Array<string>>([]);
  const [match, setMatch] = useState<string>('');
  const [modal, setModal] = useState<any>(false);

  const [option, setOption] = useState<OptionType>({
    instant: false,
    matchtop: false,
    badge: false,
  });

  const handleSubmit = (val: string) => {
    if (val === match) return;
    if (!val) {
      setData([]);
      return;
    }
    spellCheck(val)
      .then((res) => {
        setMatch(res.success ? val : '');
        setData(res.suggestions);
      })
      .catch((e) => alert('error detected'));
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleOptionChange = (_option: any) => {
    setOption(_option);
  };

  const changeDebounce = (val: string) => {
    if (!option.instant) {
      return;
    }
    const debounceFunc = debounce(handleSubmit, 500);
    debounceFunc(val);
  };

  return (
    <>
      <Container>
        <FormContainer>
          <SpellCheckForm
            instantMode={option.instant}
            onChange={changeDebounce}
            onSubmit={handleSubmit}
            toggleModal={handleModal}
          />
          <SuggestionView
            data={data}
            match={match}
            badge={option.badge}
            sort={option.matchtop ? SORT_MATCH : SORT_ALPHABET}
          />
        </FormContainer>
        <Usage />
      </Container>
      <div className={modal ? '' : 'hidden'}>
        <OptionModal
          optionChange={handleOptionChange}
          onClose={() => setModal(false)}
        />
      </div>
    </>
  );
};

export default SpellChecker;
