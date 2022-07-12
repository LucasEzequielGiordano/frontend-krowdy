const questionsVideos = [
    { id: 1, question: '¿Qué te motivo a estudiar programación?', time: 0, response: [] },
    { id: 2, question: '¿Qué hacías antes de estudiar programación?', time: 0, response: [] },
    { id: 3, question: '¿Tuviste alguna experiencia laboral previa?', time: 0, response: [] },
    { id: 4, question: '¿Cual fue tu mayor reto en un proyecto?', time: 0, response: [] }
]

export const getQuestionsVideos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? questionsVideos.find(element => element.id == id) : questionsVideos
            resolve(query)
        }, 500)
    })
}