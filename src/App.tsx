import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserView } from './components/UserView';
import ProductView from './components/ProductView';


function App() {
  return (
    <div className='App'>
      <h1>Random users</h1>
      <header>
        <img src={reactLogo} className='App-logo' alt='logo' />
        <img src={viteLogo} className='App-logo' alt='logo' />
        <header/>

      </header>
      <main>
        <ProductView />
       {/* <UserView /> */}
      </main>
    </div>
  )
}

export default App
