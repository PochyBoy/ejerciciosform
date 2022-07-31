import CIUTATS from './ciutats.json';
import {useState} from 'react'


function Ejercicio1() {

    const[valor, setvalor] = useState('G')

    const municipio = CIUTATS.map(e => { return e.municipi })
    
    const lista = [... new Set([... municipio])]
    console.log (lista)


    
    let cap = valor.charAt(0)+valor.slice(1)
    let lista2 = lista.filter(m => m.startsWith(valor)). map(e => <li>{e}</li>)

    return (
        
        <>
        
            <input type='text' onChange={e =>setvalor(e.target.value)} value ={valor}/>
            <br />
            <br />
            <ul>
                {lista2}
            </ul>

        </>


 )

}
export default Ejercicio1