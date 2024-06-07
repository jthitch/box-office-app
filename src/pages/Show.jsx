import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

const useShowByID = showId => {
  const [showData, setShowData] = useState(null);
  const[showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId)
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }      
    }
    fetchData();
  },[showId]);

  return { showData, showError }

}

const Show = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowByID(showId);  

  if(showError) {
    return <div>We have an Error: {showError.message}</div>
  }  

  if(showData) {
    return <div>Got show data: {showData.name}</div>
  }

  return <div>Data is loading... {showId}</div>;
};

export default Show;
