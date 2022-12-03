import Card from './Card';
import one from '../assets/images/mall.png';
import two from '../assets/images/mens.png';
import three from '../assets/images/women.png';
import four from '../assets/images/shoes.png';

function Allcards(){
    return (
     <div className="text-align-center" style={{display: "inline-flex"}}>
       <div className='row'>
         <div className='col-lg-3 col-sm-12 mt-3 d-block'>
           <Card img={one}/>
        </div>
        <div className='col-lg-3 col-sm-12 mt-3 d-block'>  
           <Card img={two}/>
        </div>
        <div className='col-lg-3 col-sm-12 mt-3 d-block'>
           <Card img={three}/>
        </div>
        <div className='col-lg-3 col-sm-12 mt-3 d-block'>
           <Card img={four}/>
        </div>
        </div>
    </div>
    )
}

export default Allcards;
