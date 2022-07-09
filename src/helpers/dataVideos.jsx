const questionsVideos = [
    { id: 1, question: 'pregunta 1', duration: 0, response: [] },
    { id: 2, question: 'pregunta 2', duration: 0, response: [] },
    { id: 3, question: 'pregunta 3', duration: 0, response: [] },
    { id: 4, question: 'pregunta 4', duration: 0, response: [] }
]

export const getQuestionsVideos = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? questionsVideos.find(element => element.id === id ) : questionsVideos                                  
                resolve( query )                           
            }, 2000)
        })
}