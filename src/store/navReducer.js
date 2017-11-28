import { NavigationActions } from "react-navigation";
import AppNavigator from "./../containers";

// 还不理解这里
// Home is a name of navigater
// const initialState = AppNavigator.router.getStateForAction(
//   AppNavigator.router.getActionForPathAndParams("Home")
// );
const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
