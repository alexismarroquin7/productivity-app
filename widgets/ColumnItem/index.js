export const ColumnItem = ({ cards = [], title = "" }) => {
  return (
    <div
      className="column_item"
    >

      <p>{title}</p>

      {cards.length > 0 && <CardList cards={cards} />}

      <button
      
        className="create-column-card"
      >+ Card</button>
      
      <style jsx>{`
      
        .column_list {
          display: flex;
          flex-flow: column wrap;
        }

        .create-column-card {
          padding: 1rem;
        }
      
      `}</style>
    </div>
  )
}