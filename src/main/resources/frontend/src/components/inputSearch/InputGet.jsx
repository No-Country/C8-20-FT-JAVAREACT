import { useState } from 'react';
import {useEffect} from 'react';
import '../../css/inputSearch.css';
import MGlass from '../../assets/images/iconOptions/MGlass.png';


function InputGet(){

    const [suggestionProduct, SetSuggestionProduct] = useState([])
    const [search, setSearch] = useState("")


    useEffect(()=>{
        fetch('http://localhost:3000/api/products')
        .then(res => console.log(res.json()))
        // .then(res => console.log(res.data()))
        
    },[])

    const getProducts = (searching) =>{
        let resultSearched = suggestionProduct.filter(element =>{
            if(element.name.toString().toLowerCase().includes(searching.toLowerCase())){
                console.log(element)
            }
        })
        SetSuggestionProduct(resultSearched)
    }

    const handlerChange = (e) => {
        setSearch()
        getProducts(e.target.value)
    }

    console.log(suggestionProduct)

    return(
        <>
            <div className="containerSearch">
                <input type="text" className="searchBox" placeholder='Buscar...' value={search} onChange={handlerChange} />
                <button className="searchingButton"><img src={MGlass} className='MGlass' /></button>
                {suggestionProduct && suggestionProduct.map((item, index) =>{
                    return( <div>
                        <div key={index} >
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>)
                })}
            </div>
        </>
    )
}

export default InputGet;