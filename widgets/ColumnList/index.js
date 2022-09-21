import { ColumnItem } from "../ColumnItem"

export const ColumnList = ({ columns = [] }) => {
  return (
    <div
      className="column_list"
    >
      {columns.length > 0 && (
        <div>
          {columns.map(col => {
            return <ColumnItem column={col} key={col.id}/>
          })}
        </div>
      )}

      <button className="create-column-button">+ Column</button>
      <style jsx>{`
        .column_list {
          display: flex;
          flex-flow: row nowrap;
          border: 1px solid black;
          padding: 1rem 0;
        }
      
        .create-column-button {
          padding: 1rem;
        }
      
      `}</style>
    </div>
  )
}