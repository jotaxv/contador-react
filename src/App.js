import { useState } from "react"
import './index.css'

 export default function App() {

    const [numero, setNumero] = useState(0)

    function diminuir() {
        setNumero(numero - 1)
        console.log(numero)
    }
    function aumentar() {
        setNumero(numero + 1)
        console.log(numero)
    }
    function diminuir10() {
        setNumero(numero - 10)
        console.log(numero)
    }
    function aumentar10() {
        setNumero(numero + 10)
        console.log(numero)
    }
    function diminuir100() {
        setNumero(numero - 100)
        console.log(numero)
    }
    function aumentar100() {
        setNumero(numero + 100)
        console.log(numero)
    }
    function diminuir1000() {
        setNumero(numero - 1000)
        console.log(numero)
    }
    function aumentar1000() {
        setNumero(numero + 1000)
        console.log(numero)
    }
    function resetar() {
        setNumero(numero - numero)
        console.log(numero)
    }

    return <section>
          <div className="contador">
           <h1 id="titulo">Contador em React</h1>
           <p className="number">{numero}</p>
           <button className="button1" onClick={diminuir1000}>-1000</button>
           <button className="button2" onClick={diminuir100}>-100</button>
           <button className="button3" onClick={diminuir10}>-10</button>
           <button className="button4" onClick={diminuir}>-1</button>
           <button className="button9" onClick={resetar}>0</button>
           <button className="button5" onClick={aumentar}>+1</button>
           <button className="button6" onClick={aumentar10}>+10</button>
           <button className="button7" onClick={aumentar100}>+100</button>
           <button className="button8" onClick={aumentar1000}>+1000</button>
           
          </div>
        </section>

 }
