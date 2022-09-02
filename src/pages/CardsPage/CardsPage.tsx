import Hand from "../../components/Hand";

export const Cards = () => {
    return (
        <div>
            <h1>Card Game</h1>
            <Hand background = 'secondary.main' variant='Your'/>
            <Hand background = 'secondary.dark' variant='Dealer'/>

        </div>

    )
  }
  
  export default Cards;