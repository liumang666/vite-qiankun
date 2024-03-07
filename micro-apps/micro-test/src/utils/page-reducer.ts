interface State {
  page: number;
  size: number;
}

enum ActionType {
  page = "page",
  size = "size",
  reset = "reset",
}

type PageAction =
  | { type: ActionType.page; value: number }
  | { type: ActionType.size; value: number }
  | { type: ActionType.reset };

const initialState: State = {
  page: 1,
  size: 10,
};

const pageReducer = (state: State, action: PageAction): State => {
  switch (action.type) {
    case ActionType.page:
      return { ...state, page: action.value };
    case ActionType.size:
      return { ...state, size: action.value };
    case ActionType.reset:
      return initialState;
    default:
      throw new Error("Unknown action");
  }
};

export { initialState, pageReducer, ActionType };
