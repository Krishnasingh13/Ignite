// Base url
const base_url = "https://api.rawg.io/api/games";

// const key = process.env.API_KEY;

const key = '64549ccec91a47239b7bf0a2c4977534';

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//GAME_URL'S
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`;
const upcoming_games = `&dates=${currentYear},${nextYear}&ordering=-added&page_size=15`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=15`;

//POPULAR_GAMES_URL
export const popularGamesURL = () => `${base_url}?key=${key}${popular_games}`;

//UPCOMING_GAMES_URL
export const upcomingGamesURL = () => `${base_url}?key=${key}${upcoming_games}`;

//NEW_GAMES_URL
export const newGamesURL = () => `${base_url}?key=${key}${new_games}`;

//GAME_DETAILS_URL
export const gameDetailsURL = (game_id) => `${base_url}/${game_id}?key=${key}`;

//GAME_SCREENSHOT_URL
export const gameScreenshotURL = (game_id) =>`${base_url}/${game_id}/screenshots?key=${key}`;

//SERACH_GAME_URL
export const searchGameURL = (game_name) =>`${base_url}?key=${key}&search=${game_name}&page_size=10`;
