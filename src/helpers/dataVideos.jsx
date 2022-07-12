const questionsVideos = [
    { id: 1, question: 'pregunta 1', time: 0, response: [] },
    { id: 2, question: 'pregunta 2', time: 0, response: [] },
    { id: 3, question: 'pregunta 3', time: 0, response: [] },
    { id: 4, question: 'pregunta 4', time: 0, response: [] }
]

export const getQuestionsVideos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? questionsVideos.find(element => element.id == id) : questionsVideos
            resolve(query)
        }, 500)
    })
}