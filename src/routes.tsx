import React from 'react'
import ChooseToken from './pages/ChooseToken'
import SwapTest from './pages/SwapTest'
import {HashRouter} from "react-router-dom"
import {Routes as ReactRoutes,Route} from "react-router-dom"
import SwapTest2 from './pages/SwapTest/index2'
import SwapInfor from './pages/Infor'
import Page5 from './pages/SendToken'
import Page6 from './pages/SendToken/index1'
import Page7 from './pages/SendToken/index2'
export default function Routes() {
  return (
    <div>
        <HashRouter>
            <ReactRoutes>
                <Route path='/' element={<ChooseToken/>}/>               
                <Route path='/1' element={<SwapTest/>}/>
                <Route path='/2' element={<SwapTest2/>}></Route>
                <Route path='/3' element = {<SwapInfor/>}></Route>
                <Route path='/4' element = {<Page5/>}></Route>
                <Route path='/5' element = {<Page6/>}></Route>
                <Route path='/6' element = {<Page7/>}></Route>
            </ReactRoutes>
        </HashRouter>
    </div>
  )
}
