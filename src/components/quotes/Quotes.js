import './Quotes.css'
import data from '../../data'
import Card from './QuoteCard'

const Quotes = () => {
    const card = data.map( item => {
        return (
            <Card   key={item.id}
                    image={item.image}
                    name={item.name}
                    title={item.title}
                    quote={item.quote}/>
        )
    })
    
    return (
        <div className="quotes_container flex_row">
            {card}
        </div>
    )
}

export default Quotes