const questionsVideos = [
    { id: 1, question: '¿Qué te motivo a estudiar programación?' },
    { id: 2, question: '¿Qué hacías antes de estudiar programación?' },
    { id: 3, question: '¿Tuviste alguna experiencia laboral previa?' },
    { id: 4, question: '¿Cual fue tu mayor reto en un proyecto?' }
]

export const getQuestionsVideos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? questionsVideos.find(element => element.id == id) : questionsVideos
            resolve(query)
        }, 500)
    })
}