const urlAPI = 'https://rickandmortyapi.com/api';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      characters: [],
      active: undefined
		},
		actions: {
      loadCharacters: () => {
        fetch(`${urlAPI}/character`).then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          getActions().setListCharacters(data.results);
        })
      },
      loadCharacter: (id) => {
        fetch(`${urlAPI}/character/${id}`).then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setStore({ active: data });
        })
      },
      setListCharacters: (lista) => {
        setStore({ characters: lista });
      },
		}
	};
};

export default getState;