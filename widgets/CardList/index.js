import { CardItem } from "../CardItem";

export const CardList = ({ cards = [] }) => {
  return (
    <div className="card_list">
      
      {cards.map(card => {
        return <CardItem card={card} key={card.id}/>
      })}
      
      <style jsx>{`
        .card_list {
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  )
}