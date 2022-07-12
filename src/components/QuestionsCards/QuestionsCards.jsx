import { Link } from 'react-router-dom'

const QuestionsCards = ({ vid }) => {
    return (
        <div className="cards__container">
            <div className="question-card__container">
                <div className="question-video__card">
                    <video src="" controls></video>
                    <div className="question-color__card">
                        <Link to={`/question/${vid.id}`}>
                            <p>{vid.question}</p>
                        </Link >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsCards