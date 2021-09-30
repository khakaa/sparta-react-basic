// ranking 정보를 넣어줄거야
// 랭킹 정보에 하나를 더 추가해줄거야 (추가되는 정보는 퀴즈 푼 유저의 정보야{점수,이름,메세지})

const SET_NAME = "user/SET_NAME";
const SET_SCORE = "user/SET_SCORE";
const SET_MESSAGE = "user/SET_MESSAGE";

export const setName = (name) => {
  return { type: SET_NAME, name };
};

export const setScore = (score) => {
  return { type: SET_SCORE, score };
};

export const setMessage = (message) => {
  return { type: SET_MESSAGE, message };
};

const initialState = {
  userList: [],
  currentUser: {
    name: "",
    score: 0,
    message: "",
  },
};

const getSortedRanking = (ranking) => ranking.sort((a, b) => a.score - b.score);

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/SET_NAME":
      return {
        userList: getSortedRanking(state.userList),
        currentUser: { ...state.currentUser, name: action.name },
      };
    case "user/SET_SCORE":
      return {
        userList: getSortedRanking(state.userList),
        currentUser: { ...state.currentUser, score: action.score },
      };
    case "user/SET_MESSAGE":
      const newUser = { ...state.currentUser, message: action.message };
      console.log(newUser);
      console.log([...state.userList, newUser]);
      return {
        ...state,
        userList: getSortedRanking([...state.userList, newUser]),
      };
    default:
      return state;
  }
}
