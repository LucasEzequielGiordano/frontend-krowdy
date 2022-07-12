import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionDetailContainer from './containers/QuestionDetailContainer/QuestionDetailContainer'
import QuestionsCardsContainer from './containers/QuestionsCardsContainer/QuestionsCardsContainer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuestionsCardsContainer />}>
        </Route>
        <Route path='/question/:detailId' element={<QuestionDetailContainer />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App