import { useState, useEffect } from 'react';
import { useSearchString } from '../lib/useSearchString';
import CustomRadio from './customRadio';


const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchString();
  const [searchOption, setSearchOption] = useState('shows');

  useEffect(() => {
    console.log('COMPONENT MOUNTS');

    return () => {
      console.log('COMPONENT UNMOUNTS');
    };
  }, [searchOption]);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />

      <CustomRadio
      label="Shows"
      name="search-option"
      value="shows"
      checked={searchOption === 'shows'}
      onChange={onRadioChange}
      />

      <CustomRadio
      label="Actors"
      name="search-option"
      value="actors"
      checked={searchOption === 'actors'}
      onChange={onRadioChange}
      />


      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
