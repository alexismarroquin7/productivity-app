export const CardItem = ({ card }) => {
  return (
    <div className="card_item">
      
      <h6>{card.title}</h6>

      <style jsx>{`
        .card_item {
          border: 1px solid black;
          background-color: #eee;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}