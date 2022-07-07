// == Import
import PropTypes from 'prop-types';

import './styles.scss';
// On importe ici les composants Card et Image pour afficher nos cards de recettes
import { Card, CardDescription, CardHeader, Image, Icon } from 'semantic-ui-react';

// == Composant
function Result({ title, image, calories, carbs, fat, protein }) {
  return (
    <div className="Recipe">
      <Card>
        <Image src={image} />
        <Card.Content>
          <CardHeader>
            {title}
          </CardHeader>
          {/* <CardDescription>
            <Icon name="heartbeat" />
            {`${calories} calories, ${carbs} carbs, ${fat} fat, ${protein} protein`}
          </CardDescription> */}
        </Card.Content>
      </Card>
    </div>
  );
}

Result.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// == Export
export default Result;
