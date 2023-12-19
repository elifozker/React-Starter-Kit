import './style.scss'
import { createElement, useState, useEffect , useRef,forwardRef} from "react"
import "./tailwind.css"
import Tab from "./components/Tab"
import Button from "./components/Button"
import Test from "./Test"


const Input = forwardRef((props,ref) => {
  return <input ref={ref} type="text" {...props} />
})



function App() {

  /*const todos = ['todo1','todo2','todo3']
  const h1 = createElement('h1',null,'prototurk.com')
  const ul = createElement('ul',null,todos.map(todo => createElement('li',null,todo)))
  return createElement('main',{
    className: 'test',
    id:'main'
  },h1,ul) */

  const [activeTab, setActive] = useState()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  const searchFunction = () => {
    alert('hello!')
  }
  const inputRef = useRef()
  const focusInput = () =>{
    inputRef.current.focus();
  }
  return (
    <>
    <h1>useRef() - ForwardRef()</h1>
    <Input ref={inputRef}/>
    <button onClick={focusInput}>Focusla</button>
    <hr/>








      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <Test/>}
      <div style={{ padding: 20 }}>
        <button onClick={() => setActive(2)}>Aktif tabı değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActive}>
          <Tab.Panel title="Profil">1.tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2.tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.tab</Tab.Panel>
        </Tab>
      </div>
      <div style={{ padding: 20 }}>
        <Button>
          Buton Örneği
        </Button>
        <Button variant='success'>
          Buton Örneği
        </Button>
        <Button variant='danger'>
          Buton Örneği
        </Button>
        <Button variant='warning'>
          Buton Örneği
        </Button>
      </div>
      <h1 tabIndex="3">prototurk.com</h1>
      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>Arama</label>
      <input type="text" id="search" tabIndex="1"></input>
      <h1>prototurk</h1>
    </>
  );
}

export default App;
