const defaultState = {
  token: null,
  user: null,
  games: "null",
  game: null,
  opponent: null,
  singing: false,
  showHelp: false,
  activeIndex: 0,
  mainIndex: 0,
  scorePage: 0,
  maxScorePage: 0,
  scoreColumn: null,
  scoreData: [],
  scoreDirection: null,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INIT_DATA":
      return {...state, games: action.payload}

    case "SIGN_USER_IN":
      return {...state, user: action.payload.user, token: action.payload.token}

    case "PLAYER_DEFENSE":
      return {
        ...state,
        user: action.payload,
      }

    case "PLAYER_CHARGE":
      return {
        ...state,
        user: action.payload,
      }

    case "PLAYER_ATTACK":
      return {
        ...state,
        user: action.payload.player,
        opponent: action.payload.opponent,
      }

    case "OPPONENT_DEFENSE":
      return {
        ...state,
        user: action.payload.player,
        opponent: action.payload.opponent,
      }

    case "OPPONENT_CHARGE":
      return {
        ...state,
        user: action.payload.player,
        opponent: action.payload.opponent,
      }

    case "OPPONENT_ATTACK":
      return {
        ...state,
        user: action.payload.player,
        opponent: action.payload.opponent,
      }

    case "OPPONENT_PRE_ATTACK":
      return {
        ...state,
        opponent: action.payload,
      }

    case "OPPONENT_POST_ATTACK":
      return {
        ...state,
        user: action.payload.player,
        opponent: action.payload.opponent,
      }

    case "SIGN_USER_OUT":
      return {...state, user: null, game: null, opponent: null}

    case "FORFEIT":
      return {...state,
        user: action.payload,
        opponent: null,
        game: null,
      }

    case "END_GAME":
      return {...state,
        user: action.payload.player,
        opponent: null,
        games: action.payload.games,
        game: action.payload.game,
      }

    case "NEW_GAME":
      return {...state,
        user: action.payload.player,
        opponent: action.payload.opponent,
      }

    case "SWITCH_SIGNING":
      return {...state, singing: !state.singing}

    case "HELP":
      return {...state, showHelp: !state.showHelp}

    case "NEW_INDEX":
      return {...state, activeIndex: action.payload}

    case "MAIN_INDEX":
      return {...state, mainIndex: action.payload}

      case "SCOREBOARD_MOD":
        return {...state,
        scorePage: action.payload.scorePage,
        maxScorePage: action.payload.maxScorePage,
        scoreColumn: action.payload.scoreColumn,
        scoreData: action.payload.scoreData,
        scoreDirection: action.payload.scoreDirection}

    default:
      return state
  }
}

export default reducer
