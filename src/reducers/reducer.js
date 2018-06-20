const defaultState = {
  user: null,
  users: null,
  games: null,
  game: null,
  opponent: null,
  uStatus: true,
  oStatus: "Your Turn",
  uAnimation: "pulse",
  oAnimation: "pulse",
  uVisible: true,
  oVisible: true,
  ohp: 100,
  uhp: 100,
  oA: "Attacking",
  oCharged: false,
  oDefending: false,
  uDefending: false,
  uCharged: false,
  singing: false
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INIT_DATA":
      return {...state, users: action.payload.users, games: action.payload.games}

    case "SIGN_USER_IN":
      return {...state, user: action.payload}

    case "PLAYER_DEFENSE":
      return {
        ...state,
        uStatus: false,
        uAnimation: "jiggle",
        uDefending: true,
        uCharged: false,
        uVisible: !state.uVisible
      }

    case "PLAYER_CHARGE":
      return {
        ...state,
        uStatus: false,
        uAnimation: "glow",
        uDefending: false,
        uCharged: true,
        uVisible: !state.uVisible
      }

    case "PLAYER_ATTACK":
      return {
        ...state,
        uAnimation: "tada",
        oVisible: !state.oVisible,
        uVisible: !state.uVisible,
        oAnimation: "flash",
        uStatus: false,
        oDefending: false,
        uCharged: false,
        ohp: action.payload
      }

    case "OPPONENT_DEFENSE":
      return {
        ...state,
        oStatus: "Defending",
        oAnimation: "jiggle",
        oVisible: !state.oVisible,
        uStatus: true,
        oA: "Defending",
        oCharged: false,
        oDefending: true
      }

    case "OPPONENT_CHARGE":
      return {
        ...state,
        oStatus: "Charging",
        oAnimation: "glow",
        oVisible: !state.oVisible,
        uStatus: true,
        oCharged: true,
        oA: "Charging",
        oDefending: false
      }

    case "OPPONENT_ATTACK":
      return {
        ...state,
        oVisible: !state.oVisible,
        uVisible: !state.uVisible,
        oAnimation: "tada",
        uAnimation: "flash",
        uhp: action.payload,
        oA: "Attacking"
      }

    case "OPPONENT_PRE_ATTACK":
      return {
        ...state,
        oStatus: "Attacking"
      }

    case "OPPONENT_POST_ATTACK":
      return {
        ...state,
        oCharged: false,
        uDefending: false,
        oStatus: "Attacked",
        uStatus: true
      }

    case "SIGN_USER_OUT":
      return {...state, user: null, game: null, opponent: null}

    case "FORFEIT":
    // console.log("hi");
      return {...state,
        opponent: null,
        game: null,
        opponent: null,
        ohp: 100,
        uhp: 100,
        oA: "Attacking",
        oCharged: false,
        oDefending: false,
        uDefending: false,
        uCharged: false,
        uStatus: true,
        oStatus: "Your Turn",
        uVisible: true,
        oVisible: true,
        uAnimation: "pulse",
        oAnimation: "pulse",
      }

    case "END_GAME":
      // console.log("Action", action.payload)
      console.log(state.games);
      console.log(action.payload.games);
      return {...state,
        opponent: null,
        games: action.payload.games,
        game: action.payload.game,
        opponent: null,
        ohp: 100,
        uhp: 100,
        oA: "Attacking",
        oCharged: false,
        oDefending: false,
        uDefending: false,
        uCharged: false,
        uStatus: true,
        oStatus: "Your Turn",
        uVisible: true,
        oVisible: true,
        uAnimation: "pulse",
        oAnimation: "pulse",
      }

    case "NEW_GAME":
      // console.log("Action", action.payload);
      return {...state,
        opponent: action.payload,
        ohp: 100,
        uhp: 100,
        oA: "Attacking",
        oCharged: false,
        oDefending: false,
        uCharged: false,
        uDefending: false,
        uStatus: true,
        oStatus: "Your Turn",
        uVisible: true,
        oVisible: true,
        uAnimation: "pulse",
        oAnimation: "pulse",
      }

    case "SWITCH_SIGNING":
      return {...state, singing: !state.singing}

    default:
      return state
  }
}

export default reducer
