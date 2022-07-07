// == Imports

// Import de useState pour la création du state
import { useState } from 'react';
import axios from 'axios';

import './styles.scss';

// Import du composant Image de semantic-ui
// Afin d'avoir un style déjà fait pour le logo
import { Image } from 'semantic-ui-react';

import SearchBar from '../SearchBar';
import NbResult from '../NbResults';
import Results from '../Results';
import logo from '../../assets/logo.png';

// == Composant
function App() {
  // Ajout d'un emplacement dans le state pour la valeur recherchée
  // Valeur du state : searchedValue, setSearchedValue sera la méthode pour la modifier,
  // et '' est sa valeur de départ
  const [searchedValue, setSearchedValue] = useState('');

  // On crée un autre emplacement dans le state pour stocker les recettes à afficher
  // De base, on crée un tableu vide
  const [recipesList, setRecipesList] = useState([]);

  // On crée un autre emplacement pour le nombre de resultats, qu'on initialiste à 0
  const [nbResults, setNbResults] = useState(0);

  // On crée une méthode pour l'appel à l'API
  // On la passe en props à notre composant SearchBar
  // On dynamise la requête selon la valeur cherchée par l'utilisateur
  const loadingRecipesFromAPI = () => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchedValue}&apiKey=e0b7e4ce9a234704aa686c340f575b33`)
      .then(
        // Si promesse tenue, on recup le resultat
        (response) => {
          // console.log(response.data);
          // On met le resultat de notre requête dans le state
          // Soit les recettes recupérées dans notre emplacement dedié
          setRecipesList(response.data.results);
          setNbResults(response.data.totalResults);
        },
      )
      .catch(
        // Si promesse rompue, erreur
        (error) => {
          console.log(error);
        },
      );
  };

  return (
    <div className="app">
      <header className="left__side">
        <Image src={logo} size="small" centered />
        <SearchBar
          searchedValue={searchedValue}
          setSearchedValue={setSearchedValue}
          loadRecipes={loadingRecipesFromAPI}
        />
        <NbResult data={nbResults} />
      </header>
      <main className="right__side">
        <Results data={recipesList} />
      </main>
    </div>
  );
}

// == Export
export default App;
