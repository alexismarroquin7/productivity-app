
import { useState } from 'react';
import { ColumnList } from '../ColumnList';

export const Board = ({ board = {}, dispatch }) => {
  
  const [ editing , setEditing ] = useState({
    board: {
      title: false
    }
  });

  return (
    <div className='board'>
      
      {!editing.board.title ? (
        <h3
          onPointerDown={e => {
            e.preventDefault();
            e.stopPropagation();
            setEditing({
              ...editing,
              board: {
                ...editing.board,
                title: true
              }
            })
          }}
        >{board.title}</h3>
      ) : (
        
        <input
          value={board.title}
          onChange={handleChange}
        />
      )}


      
      <ColumnList
        columns={board.column.list}
        board_id={board.id}
        dispatch={dispatch}
      />

      <style jsx>{`
        .board {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          border: 1px solid black;
          padding: 2rem;
          align-items: flex-start;
          gap: 2rem;
        }

        .column-section {
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          border: 1px solid black;
          align-items: flex-start;
          gap: 2rem;
        }
      
        .create-column-button {
          width: 30rem;
          padding: .5rem;
        }
      
      `}</style>
    </div>
  )
}