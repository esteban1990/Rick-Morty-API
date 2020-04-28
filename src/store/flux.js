

const urlAPI = 'https://rickandmortyapi.com/api';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      locations: [],
      infoLocation : null,
      episodes : [],
      infoEpisode : null,
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
      setListLocations : (locations) => {
        setStore({locations :locations })
      },
      setListEpisodes : (episodios) => {
        setStore({episodes: episodios})
      },



      ListAllLocation : () =>  {
        fetch(`${urlAPI}/location`)
        .then(function(response){
          if(response.ok)
          return response.json()
        })
        .then(function(data){
          console.log(data);
          getActions().setListLocations(data.results)
        })
      },
      

      loadLocation : (id) => {
        fetch(`${urlAPI}/location/${id}`)
        .then(function(response){
          if(response.ok)
          return response.json()
        })
        .then(function(data){
          console.log(data)
          setStore({infoLocation : data}

          )})
        },

        AllEpisodes : () => {
          fetch(`${urlAPI}/episode`)
          .then(function(response){
            if(response.ok)
            return response.json()
          })
          .then(function(data){
            console.log(data)
            getActions().setListEpisodes(data.results)
          })
          
        },

        loadEpisode : (id) => {
          fetch(`${urlAPI}/episode/${id}`)
          .then(function(response){
            if(response.ok)
            return response.json();
          })
          .then(function(data){
            console.log(data);
            setStore({infoEpisode : data})
          })
        }

}
}}


export default getState;
