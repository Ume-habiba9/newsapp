import { fetchNews } from "./reactredux/saga"
import { all } from "redux-saga/effects"
export function* mySaga() {

  try {

    yield all([
      ...fetchNews

    ]);
  } catch {
    console.log("")
  }

}
