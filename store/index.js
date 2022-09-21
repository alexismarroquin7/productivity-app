import { v4 as uuid } from "uuid";

const ACTION_TYPE = {
  board: {
    create: {
      column: "board/create/column"
    }
  },
  column: {
    create: {
      card: "column/create/card"
    }
  }
}

const createBoard = ({ id }) => {
  return {
    type: ACTION_TYPE.board.create.column,
    payload: {
      id // board id
    }
  }
}

const createCard = ({ board, column }) => {
  return {
    type: ACTION_TYPE.column.create.card,
    payload: {
      board,
      column
    }
  }
}

export const Action = {
  createBoard,
  createCard
}

export const initialState = {
  board: {
    list: [
      {
        id: uuid(),
        title: "Unititled",
        column: {
          list: [
            {
              id: uuid(),
              title: "Untitled",
              cards: [
                {
                  id: uuid(),
                  title: "Untitled"
                },
                {
                  id: uuid(),
                  title: "Untitled"
                },
              ]
            }
          ]
        }
      }
    ]
  },
};

export const rootReducer = (state, action) => {
  switch (action.type){
    case ACTION_TYPE.board.create.column:
      return {
        ...state,
        board: {
          ...state.board,
          list: state.board.list.map(board => {
            if(board.id === action.payload.id){
              board.column.list.push({
                id: uuid(),
                title: "Unititled",
                cards: []
              })
            }

            return board;
          })
        }
        
      }

    case ACTION_TYPE.column.create.card:
      return {
        ...state,
        board: {
          ...state.board,
          list: state.board.list.map(board => {
            if(board.id === action.payload.board.id){
              board.column.list = board.column.list.map(column => {
                if(column.id === action.payload.column.id){
                  column.cards = [...column.cards, {
                    id: uuid(),
                    title: "Untitled"
                  }]
                }
                return column;
              })
            }
            
            return board;
          })
        }
      }
    default:
      throw Error(`unkown action.type ${action.type}`);
  }
};