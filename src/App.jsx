import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/Pricing/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarksCharts from './Components/MarksChart/MarksCharts'



const pricingPromise = fetch('pricingData.json'). then(res => res.json())

const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}>

          </PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <MarksCharts marksPromise={marksPromise}></MarksCharts>
        </Suspense>
           
        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
