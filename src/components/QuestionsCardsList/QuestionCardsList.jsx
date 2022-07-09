import QuestionsCards from "../QuestionsCards/QuestionsCards"

const QuestionsCardsList = ({ videos }) => {
    return (
        videos.map((vid) => <QuestionsCards key={vid.id} vid={vid} />)
    )
}

export default QuestionsCardsList
