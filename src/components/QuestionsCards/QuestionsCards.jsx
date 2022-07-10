import { Link } from 'react-router-dom'

const QuestionsCards = ({ vid }) => {
    console.log(vid)
    return (
        <Link to={`/question/${vid.id}`}>
            <div className="cards__container">
                <div className="question-card__container">
                    <div className="question-video__card">
                        <video src="" controls></video>
                        <div className="question-color__card">
                            <p>{vid.question}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default QuestionsCards