import pricesImg from '../assets/images/prices.jpg';

function Prices(){
  return(
    <div className='container'>
    <h1 style={{textAlign: "center"}}>Prices here</h1>
    <img src={pricesImg} alt="text" style={{width: "100%"}}/>
    </div>
  )
}
 export default Prices;