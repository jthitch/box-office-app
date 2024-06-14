import { useStarredShows } from "../lib/useStarredShows";

const Starred = () => {
  const [starredShows] = useStarredShows();


  return <div>Starred Page, {starredShows.length}</div>;
};

export default Starred;
