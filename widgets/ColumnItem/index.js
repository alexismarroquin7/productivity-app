import { Action } from "../../store";
import { CardList } from "../CardList";

export const ColumnItem = ({ board_id, column = {}, dispatch }) => {
  
  const handleCreateCard = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(Action.createCard({
      board: { id: board_id },
      column: { id: column.id },
    }))
  }

  return (
    <div
      className="column_item"
    >

      <h3>{column.title}</h3>

      {column.cards.length > 0 && <CardList cards={column.cards} />}

      <button
        className="create-column-card"
        onPointerDown={handleCreateCard}
      >+</button>
      
      <style jsx>{`
      
        .column_item {
          width: 30rem;
          display: flex;
          flex-flow: column wrap;
          border: 1px solid black;
          padding: 1rem;
        }
        
        .create-column-card {
          width: 100%;
          display: flex;
          padding: .5rem;
          align-items: center;
          /* font-size: 2rem; */
        }
      
      `}</style>
    </div>
  )
}