import { useEffect, useRef } from "react"
import { useState } from "react"

const MediaStreamRecorder = () => {
    const [recording, setRecording] = useState(false)
    const [downloadLink, setDownloadLink] = useState('')
    const [error, setError] = useState(null)
    const mediaStream = useRef(null)
    const mediaStreamVideo = useRef(null)
    const mediaStreamRecorder = useRef(null)
    const audioSource = useRef([])
    const videoSource = useRef([])
    const type = useRef([])

    const record = () => {
        if (recording) {
            return
        }
        if (!mediaStream.current) {
            return
        }
        mediaStreamRecorder.current = new MediaRecorder(mediaStream.current)
        mediaStreamRecorder.current.start()
        mediaStreamRecorder.current.ondataavailable = (event) => {
            if (type.current) {
                type.current.push(event.data)
            }
        }
        setRecording(true)
    }

    function stop() {
        if (!mediaStreamRecorder.current) {
            return
        }
        mediaStreamRecorder.current.stop()
        setRecording(false)
    }

    useEffect(() => {
        if (recording) {
            return
        }
        if (type.current.length === 0) {
            return
        }
        const blob = new Blob(type.current, {
            type: 'video/webm;codecs=vp9,opus'
        })
        setDownloadLink(URL.createObjectURL(blob))
        type.current = []
    }, [recording])


    useEffect(async () => {
        function getVideo(stream) {
            mediaStream.current = stream
            if (mediaStreamVideo.current) {
                mediaStreamVideo.current.srcObject = stream
            }
        }

        async function getRecording() {
            if (mediaStream.current) mediaStream.getTracks().forEach(track => {
                track.stop()
            })
            const constraints = {
                audio: audioSource,
                video: videoSource
            }
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constraints)
                getVideo(stream)
            } catch (error) {
                setError(error)
            }
        }

        await getRecording()

    }, [])

    return (
        <div>

            <div>
                <video ref={mediaStreamVideo} autoPlay muted playsInline></video>
            </div>

            <div>
                {downloadLink && <video src={downloadLink} controls></video>}
                {downloadLink && (
                    <a href={downloadLink} download="file.webm">Descargar</a>
                )}
            </div>

            <div>
                <button onClick={record} disabled={recording}>record</button>
                <button onClick={stop} disabled={!recording}>stop</button>
            </div>

            <div>
                {error && <p>{error.message}</p>}
            </div>
        </div>
    )
}
export default MediaStreamRecorder