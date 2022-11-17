import { useState } from 'react';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
import beer from '../img/beer.png';
import burger from '../img/burger.png';
import snack from '../img/snack.png';
import '../css/home.css';

function Home(){

    const [option, setOption] = useState(true)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)

    function handlerClick(){
        setOption(true)
        setOption2(false)
        setOption3(false)
       
    }

    function handlerClick2(){
        setOption2(true)
        setOption(false)
        setOption3(false)
    }

    function handlerClick3(){
        setOption3(true)
        setOption2(false)
        setOption(false)
    }


    return(
        <>
            <main>
                <div className='containerOptions'>
                    <div onClick={()=>{handlerClick()}} ><img src={burger}  /></div>
                    <div onClick={()=>{handlerClick3()}} ><img src={snack} /></div>
                    <div onClick={()=>{handlerClick2()}} ><img src={beer} /></div>
                </div>
                <section>
                    {option && <Carousel />}
                    {option2 && <Carousel2 />}
                    {option3 && <Carousel3 />}
                </section>
            </main>
        </>
    )
}

export default Home;