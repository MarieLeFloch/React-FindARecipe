// == Import
import './styles.scss';
// Import de prop-types pour la validation des props
import PropTypes from 'prop-types';

// Import de composants semantic-ui pour mettre en place notre barre de recherche
import { Segment, Form, Input } from 'semantic-ui-react';

// == Composant
function SearchBar({ searchedValue, setSearchedValue, loadRecipes }) {
  // On récupère en props la valeur du state, et la méthode associée
  // Lorsqu'il y a saisie dans l'input (onChange) : on crée une fonction anonyme
  // On remplace la valeur du state par celle saisie par l'utilisateur
  // via la méthode setSearchedValue
  return (
    <Segment>
      <h3>Search your future discovery</h3>
      <Form
        className="searchBar"
        onSubmit={
          // A la soumission du formulaire, chargement des recettes via appel API
          () => {
            loadRecipes();
          }
        }
      >
        <Input
          value={searchedValue}
          icon="search"
          iconPosition="left"
          onChange={
            (event) => {
              setSearchedValue(event.target.value);
            }
          }
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  searchedValue: PropTypes.string.isRequired,
  setSearchedValue: PropTypes.func.isRequired,
  loadRecipes: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
