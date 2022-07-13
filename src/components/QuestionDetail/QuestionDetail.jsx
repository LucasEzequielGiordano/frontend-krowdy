import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import ButtonArrowLeft from '../ButtonsCards/ButtonArrowLeft';
import './QuestionDetail.css'

const QuestionDetail = ({ videos }) => {
    let mediaRecorder = useRef(null)
    let recordedBlobs = useRef(null)
    const audio = useRef([])
    const recordedVideo = document.querySelector('video#recorded');
    const recordButton = document.querySelector('button#record');
    const gumVideo = document.querySelector('video#gum');

    const _handleRecord = () => {
        gumVideo.style.display = 'block'
        if (recordButton.textContent === 'Start Recording') {
            startRecording();
        } else {
            stopRecording();
            recordButton.textContent = 'Start Recording';
        }
    }

    function _handlePlay() {
        const superBuffer = new Blob(recordedBlobs);
        recordedVideo.src = null;
        recordedVideo.srcObject = null;
        recordedVideo.src = window.URL.createObjectURL(superBuffer);
        recordedVideo.controls = true;
        recordedVideo.play();
        gumVideo.style.display = 'none'
        recordedVideo.style.display = 'block'
    }

    function _handleDataAvailable(event) {
        console.log('handleDataAvailable', event);
        if (event.data && event.data.size > 0) recordedBlobs.push(event.data);
    }

    function startRecording() {
        recordedBlobs = [];
        try {
            mediaRecorder = new MediaRecorder(window.stream);
        } catch (e) {
            console.error('Exception while creating MediaRecorder:', e);
            return;
        }

        console.log('Created MediaRecorder', mediaRecorder, 'with options');
        recordButton.textContent = 'Stop Recording';
        mediaRecorder.onstop = (event) => {
            console.log('Recorder stopped: ', event);
            console.log('Recorded Blobs: ', recordedBlobs);
            localStorage.setItem('user', JSON.stringify(recordedBlobs))
        };
        mediaRecorder.ondataavailable = _handleDataAvailable;
        mediaRecorder.start();
        console.log('MediaRecorder started', mediaRecorder);
    }

    function stopRecording() {
        mediaRecorder.stop();
    }

    function _handleSuccess(stream) {
        console.log('getUserMedia() got stream:', stream);
        window.stream = stream;
        gumVideo.srcObject = stream;
    }

    useEffect(() => {

        async function init() {
            try {
                const constraints = {
                    audio: {
                        sound: { exact: audio }
                    },
                    video: {
                        width: 1280, height: 720
                    }
                };
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                _handleSuccess(stream);
            } catch (e) {
                console.log(e)
            }
        }
        init();
    })

    return (
        <div className='detail__container' id="container">
            <div className='detail-back'>
                <Link to={'/'}>
                    <p><ButtonArrowLeft /> Volver</p>
                </Link>
            </div>
            <video ref={mediaRecorder} id="gum" autoPlay muted playsInline></video>
            <video ref={recordedVideo} id="recorded" autoPlay playsInline loop></video>
            <div>
                <button id="record" onClick={_handleRecord}>Start Recording</button>
                <button id="play" onClick={_handlePlay}>Play</button>
            </div>
            <div className='video-question'>
                <p>{videos?.question}</p>
            </div>
            <div className='video-id'>
                <Link to={`/question/${videos.id > 1 ? videos.id - 1 : '1'}`}>
                    <p>Atras</p>
                </Link>
                <Link to={`/question/${videos.id < 4 ? videos.id + 1 : '4'}`}>
                    <p>Siguiente</p>
                </Link>
            </div>
        </div>
    )
}

export default QuestionDetail