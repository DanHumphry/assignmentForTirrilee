export const initialState = {
  currentContent: 0,
  selectedPrice: [0],
  selectedBox: [''],
};

export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const RESET_CONTENT = 'RESET_CONTENT';
export const INSERT_BOX = 'INSERT_BOX';
export const INSERT_CHECK_BOX = 'INSERT_CHECK_BOX';
export const PLUS_CURRENT_PRICE = 'PLUS_CURRENT_PRICE';

export const CHANGE_CONTENT_ACTION = (data: number) => ({ type: CHANGE_CONTENT, data });
export const RESET_CONTENT_ACTION = () => ({ type: RESET_CONTENT });
export const INSERT_BOX_ACTION = (data: string[]) => ({ type: INSERT_BOX, data });
export const INSERT_CHECK_BOX_ACTION = (data: string[]) => ({ type: INSERT_CHECK_BOX, data });
export const PLUS_CURRENT_PRICE_ACTION = (data: string[]) => ({ type: PLUS_CURRENT_PRICE, data });

const Count = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_CONTENT:
      return { ...state, currentContent: action.data };
    case RESET_CONTENT:
      return { ...state, currentContent: 0, selectedPrice: [0], selectedBox: [''] };
    case INSERT_BOX:
      return { ...state, selectedBox: action.data };
    case INSERT_CHECK_BOX:
      return { ...state, selectedBox: action.data };
    case PLUS_CURRENT_PRICE:
      return { ...state, selectedPrice: action.data };

    default:
      return state;
  }
};

export default Count;
