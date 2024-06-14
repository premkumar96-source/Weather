import { UserAction } from "./useraction";

const UserDetails = (state, action) => {
  const { type, payload } = action;
  console.log("action", action);
  let Updated = { ...state };
  switch (type) {
    case UserAction.WEATHERADD: {
      console.log("payload", payload);
      Updated.weather = payload;
      break;
    }

    case UserAction.TODOADD: {
      console.log("testss", Updated, payload);
      const find = Updated.todo.findIndex((d1) => d1.id === payload.id);
      console.log("find", find);
      // if (find >= 0) {
      //   state.todo[find] = payload;
      // } else
      if (find < 0) {
        Updated.todo.push(payload);
      }
      break;
    }
    case UserAction.DELETE: {
      const find = Updated.todo.findIndex((d1) => d1.id === payload);
      console.log("finddd", find);
      if (find >= 0) {
        Updated.todo.splice(find, 1);
        console.log("state123", Updated);
      }
      break;
    }
    case UserAction.SEARCH: {
      Updated.search = payload;
    }
  }
  return Updated;
};
export default UserDetails;
