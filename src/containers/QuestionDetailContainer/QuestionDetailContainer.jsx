import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import QuestionDetail from "../../components/QuestionDetail/QuestionDetail"
import { getQuestionsVideos } from "../../helpers/dataVideos"

const QuestionsCardsContainer = () => {
    const [videos, setVideos] = useState({})
    const { detailId } = useParams()

    useEffect(() => {
        getQuestionsVideos(detailId)
            .then(res => setVideos(res))
            .catch((err) => console.log(err))
    }, [detailId, videos])

    return (
        <div>
            <QuestionDetail videos={videos} />
        </div>
    )
}

export default QuestionsCardsContainer