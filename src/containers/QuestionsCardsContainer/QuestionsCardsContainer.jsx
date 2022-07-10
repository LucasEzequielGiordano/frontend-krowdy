import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getQuestionsVideos } from "../../helpers/dataVideos"
import QuestionsCardsList from "../../components/QuestionsCardsList/QuestionCardsList"

const QuestionsCardsContainer = () => {
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getQuestionsVideos()
                .then(res => setVideos(res.filter((vid) => vid.id === id)))
                .catch((err) => console.log(err))
        } else {
            getQuestionsVideos()
                .then(res => setVideos(res))
                .catch((err) => console.log(err))
        }
    }, [id])

    return (
        <div>
            <h1>Video Cuestionario</h1>
            <QuestionsCardsList videos={videos} />
        </div>
    )
}

export default QuestionsCardsContainer