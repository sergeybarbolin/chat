import React, { useState, useRef, useEffect } from 'react';

import convertCurrentTime from './../../utils/helpers/convertCurrentTime.js';

import { ReactComponent as PlaySvg } from './../../assets/img/play.svg';
import { ReactComponent as PauseSvg } from './../../assets/img/pause.svg';
import { ReactComponent as AudioSvg } from './../../assets/img/audio.svg';
import './Audio.scss';

const Audio = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioElem.current.pause();
        } else {
            audioElem.current.play();
        }
    }

    const playingHandler = () => {
        setIsPlaying(true);
    }

    const pauseHandler = () => {
        setIsPlaying(false);
    }

    const endedHandler = () => {
        setProgress(0);
        setCurrentTime(0);
    }

    const timeupdateHandler = () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;

        setProgress((audioElem.current.currentTime / duration) * 100);
        setCurrentTime(audioElem.current.duration - audioElem.current.currentTime);
    }

    const loadedMetaDataHandler = () => {
        setCurrentTime(audioElem.current.duration);
    }

    useEffect(() => {
        const audioCurent = audioElem.current;

        audioCurent.addEventListener('playing', playingHandler);
        audioCurent.addEventListener('pause', pauseHandler);
        audioCurent.addEventListener('ended', endedHandler);
        audioCurent.addEventListener('timeupdate', timeupdateHandler);
        audioCurent.addEventListener('loadedmetadata', loadedMetaDataHandler);

        return () => {
            audioCurent.removeEventListener('playing', playingHandler);
            audioCurent.removeEventListener('pause', pauseHandler);
            audioCurent.removeEventListener('ended', endedHandler);
            audioCurent.removeEventListener('timeupdate', timeupdateHandler);
            audioCurent.removeEventListener('loadedmetadata', loadedMetaDataHandler);
        }
    }, []);

    return (
        <div className="audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div className="audio__progress" style={{ width: `${progress}%` }}>
            </div>
            <div className="audio__controls">
                <button className="audio__btn" onClick={ togglePlay }>
                    { isPlaying ? <PauseSvg width="10px" height="10px" /> : <PlaySvg width="10px" height="10px" /> }
                </button>
            </div>
            <div className="audio__icon"><AudioSvg/></div>
            <span className="audio__duraction">{ convertCurrentTime(currentTime) }</span>
        </div>
    )
}

export default Audio
