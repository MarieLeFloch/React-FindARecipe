// == Import
import './styles.scss';
// Import de prop-types pour la validation des props
import PropTypes from 'prop-types';
// Import du composant Card de semantic-ui pour le style de nos results
import { Card } from 'semantic-ui-react';

import Result from './Result';

// == Composant
function Results({ data }) {
  // Le composant Card avec sa propriété Group permet de contenir un groupe de cards
  // On renseigne l'affichage qu'on souhaite
  // stackable permet de rendre responsive
  // On map sur l'objet data pour créer un composant Result par résultat
  return (
    <div className="results">
      <Card.Group itemsPerRow="2" stackable>
        {
          data.map((item) => <Result key={item.id} {...item} />)
        }
      </Card.Group>
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default Results;
