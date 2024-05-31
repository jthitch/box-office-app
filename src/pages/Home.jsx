import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from './../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);


  const onSearch = async ({ q, searchOption }) => {
    try {
      setapiDataError(null);

      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q); 
      }
      setApiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>An Error occured, please try again</div>;
    }

    if(apiData?.length === 0){
      return <div>No results</div>
    }

    if (apiData) {
      return apiData[0].show ? <ShowGrid shows={apiData} /> : <ActorsGrid actors={apiData}/>
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
     
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
