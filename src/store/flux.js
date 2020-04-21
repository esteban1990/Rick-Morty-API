const urlAPI = 'https://rickandmortyapi.com/api';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
      loadCharacters: () => {
        fetch(`${urlAPI}/character`).then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          getActions().setListCharacters(data.results);
        })
      },
      setListCharacters: (lista) => {
        setStore({ characters: lista });
      },
		}
	};
};

export default getState;