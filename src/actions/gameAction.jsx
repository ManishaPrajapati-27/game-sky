import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());
  // Fetch Axios
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results, // For show only results
      upComing: upcomingData.data.results, // For show only results
      newGames: newData.data.results, // For show only results
    },
  });

  //   In then catch
  // axios.get(popularGamesURL())
  // .then(date=>{
  //     // Code
  // })
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
