export const CardList = ({ cards = [] }) => {
  return (
    <div className="card_list">
      
      {cards.map(card => {
        return <CardItem card={card} key={card.id}/>
      })}
      
      <style jsx>{`
    
      `}</style>
    </div>
  )
}