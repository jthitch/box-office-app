import { FlexGrid } from '../common/FlexGrid';
import ActorCard from './ActorsCard';
import NotFoundImgScr from '../../lib/not-found-image.png'

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image ? data.person.image.medium : NotFoundImgScr
          }
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
