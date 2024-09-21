import './App.css'
import Card from './components/Card'

function App() {
  let myArr = 
  [
    {name: 'John', age: 25, occupation: 'Developer'},
    {name: 'Jane', age: 30, occupation: 'Designer'},
  ]
  return (
    <>
      <h1 className="text-3xl bg-green-400 p-3 rounded-md">
        Hello world!
      </h1>
      <Card name='Aminaldo' />
      <Card name='sandro'/>
      <Card post='pilot' myArr={myArr}/>
    </>
  )
}

export default App
