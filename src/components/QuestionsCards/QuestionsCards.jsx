import { Link } from 'react-router-dom'
import ButtonPlayCards from '../ButtonsCards/ButtonsPlayCards'
import './QuestionsCards.css'

const QuestionsCards = ({ vid }) => {
    return (
        <div className="cards__container">
            <div className="question-card__container">
                <div className="question-video__card">
                    {/* <video src="" controls></video> */}
                    <div className='color-video'>
                        <p></p>
                        <div className='button'>
                            <Link to={`/question/${vid.id}`}>
                                <ButtonPlayCards />
                            </Link >
                        </div>
                        <div className="question-color__card">
                            <p>{vid.question}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsCards