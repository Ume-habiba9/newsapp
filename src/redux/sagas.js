import newssuccess from "./reactredux/saga"
import all from "redux-saga"
export function*  mySaga(){

try {
    yield all([
      ...newssuccess
     
    ]);
  } catch (err) {
    return new Error(err);
  }

}
