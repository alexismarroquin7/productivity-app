
import { Action } from '../../store';
import { ColumnItem } from "../ColumnItem";

export const ColumnList = ({ board_id, columns = [], dispatch }) => {
  
  const handleCreateColumn = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(Action.createBoard({ id: board_id }));
  }

  return (
    <div
      className="column_list"
    >
      {columns.length > 0 ? (
        <div
          className="column_list__wrapper"
        >
          {columns.map(col => {
            return <ColumnItem 
              board_id={board_id}
              column={col}
              key={col.id}
              dispatch={dispatch}
            />
          })}
          <button 
            className="create-column-button"
            onPointerDown={handleCreateColumn}
          >
            + Column
          </button>
        </div>
      ) : (
        <button 
          className="create-column-button"
          onPointerDown={handleCreateColumn}
        >
          + Column
        </button>
      )}
      <style jsx>{`
        .column_list {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          gap: 2rem;
        }

        .column_list__wrapper {
          display: flex;
          flex-flow: row nowrap;
          align-items: flex-start;
          gap: 2rem;
        }
      
        .create-column-button {
          width: 30rem;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: flex-start;
          padding: .5rem;
        }
      
      `}</style>
    </div>
  )
}