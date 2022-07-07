// == Import
import './styles.scss';
// Import de prop-types pour la validation des props
import PropTypes from 'prop-types';
// Import du composant Message de semantic-ui pour le style de notre message
import { Message } from 'semantic-ui-react';

// == Composant
function NbResult({ data }) {
  // console.log(data);
  return (
    <Message positive>
      <div className="nbResults"> <Message.Header>{data} </Message.Header> results found</div>
    </Message>
  );
}

NbResult.propTypes = {
  data: PropTypes.number.isRequired,
};

// == Export
export default NbResult;
