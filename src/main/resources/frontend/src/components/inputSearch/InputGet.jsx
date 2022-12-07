import { useState } from 'react';
import {useEffect} from 'react';
import '../../css/inputSearch.css';
import MGlass from '../../assets/images/iconOptions/MGlass.png';
import axios from "axios";


function InputGet(){

    const dataBase = 'https://c8-20-ft-backend-production.up.railway.app/product/products'
    const [suggestionProduct, SetSuggestionProduct] = useState(false)
    const [search, setSearch] = useState("")
    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get(dataBase)
        .then(res => {
            setList(res.data)
            SetSuggestionProduct(res.data)
        })
        .catch((rej)=>{
            console.log('error al traer los productos')
        })
        
    },[])



    const getProducts = (searching) =>{
        let resultSearched = list.filter(element =>{
            if(element.title.toString().toLowerCase().includes(searching.toLowerCase())){
                return element
            }
        })
        SetSuggestionProduct(resultSearched)
    }

    const handlerChange = (e) => {
        setSearch(e.target.value)
        getProducts(e.target.value)
    }

    return(
        <>
        <div className='containerDisplaySearch'>
            <input type="text" className="searchBox" placeholder='Buscar...' value={search} onChange={handlerChange} />
            <button className="searchingButton"><img src={MGlass} className='MGlass' /></button>
           {search && <div className="containerSearch">
                {suggestionProduct.map((item, index) =>{
                    return( 
                    <div className='suggestionContainer' >
                        <div key={index} className='suggestionCard' >
                            <img src={item.url} />
                            <p className='name'>{item.title}</p>
                            <p className='description'>{item.description}</p>
                        </div>
                    </div>)
                })}
            </div>}
        </div>    
        </>
    )
}

export default InputGet;