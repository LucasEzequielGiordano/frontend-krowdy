import { Link } from 'react-router-dom'

const QuestionDetail = () => {

    
    return (
        <div>
            <Link to={'/'}>
                <div>
                    <p>← Volver</p>
                </div>
            </Link>
            <div>
                <div>
                    <video controls></video>
                    <div>
                        <p>{ }</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/question/${-1}`}>
                    <p>Atras</p>
                </Link>
                <Link to={`/question/${+1}`}>
                    <p>Siguiente</p>
                </Link>
            </div>
        </div>
    )
}

export default QuestionDetail