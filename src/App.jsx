import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import CounterConteiner from './components/CounterConteiner'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

// const Button = (props) => {
    const Button = ( {}) => {
        return (
            <div>
                <p>{ }</p>
                <button>{ }</button>
            </div>
        )
    }
 

function App() {

    // const changeText = () => "Clickeado"
    return (
        <div className='container'>
            <NavBar />
            <ItemListContainer greeting= "En que podemos ayudarte??" />
            <h1>Detailing</h1>
            <h3>En Casa!!</h3>
            <div className= "row">
                <div className= "col">
                  <Card title= "Titulo" description= "Descrip" img=" "/>
                </div>

                <div className= "col">
                  <Card title= "Titulo2" description= "Descrip2" img= "" />
                </div>

                <div className= "col">
                  <Card title= "Titulo3" description= "Descrip3" img= "" />
                </div>

            </div>
            <CounterConteiner />
      </div>
    )
}

export default App 
