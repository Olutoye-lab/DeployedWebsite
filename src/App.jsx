import './App.css'
import {gsap} from "gsap"
import { useGSAP } from '@gsap/react';
import React, {useEffect, useRef, useState} from 'react';
import {Button} from "@chakra-ui/react";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import Header from "./Header";
import UpBox from "@/boxes/UpBox.jsx";
import medtechImage from "./assets/Medtech.jpeg";
import KCS from "./assets/KCS.jpeg";
import Dreamcode from "./assets/Dreamcode.jpeg";
import LLMxLAW from "./assets/LLMxLAW.jpeg";
import S_REPLS from "./assets/S-REPLS.jpeg";
import Med_back from "./assets/Med_back.jpeg"
import KCS_cubes from "./assets/KCS_cubes.jpeg"
import Dreamcode_back from "./assets/Dreamcode_back.jpeg"
import IMP_back from "./assets/IMP_back.jpeg"
import LLM_back from "./assets/LLM_back.jpeg"
import EasyAxPolkadot from "./assets/EasyAxPolkadot.jpeg"
import EasyA_back from "./assets/EasyA_back.jpeg"
import data from "./data.json";

function App() {
    const [text, SetText] = useState("");
    const [distance, setDistance] = useState(0)
    const [index, setIndex] = useState(1)
    const bgRef = useRef(null);
    const boxRef = useRef(null);
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const boxSize = 400
    const gapSize = 200
    const arr = [Med_back, KCS_cubes, EasyA_back, Dreamcode_back, IMP_back, LLM_back]
    const arr2 = ["#3d1c83", "#5585b6", "#2b2b2b", "#d8ced4", "#0194d9", "#d6c5d7"]


    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.style.gap = `200px`;
        }
        box1.current.style.backgroundImage = `url(${medtechImage})`;
        box2.current.style.backgroundImage = `url(${KCS})`;
        box3.current.style.backgroundImage = `url(${EasyAxPolkadot})`;
        box4.current.style.backgroundImage = `url(${Dreamcode})`;
        box5.current.style.backgroundImage = `url(${S_REPLS})`;
        box6.current.style.backgroundImage = `url(${LLMxLAW})`;
    })
    const {contextSafe} = useGSAP();


    const back = contextSafe(() => {

        if (distance >= (boxSize + gapSize)) {
            setDistance(boxSize + gapSize)
        } else {
            setDistance(prev => prev + boxSize + gapSize)
        }
        if (index <= 0) {
            setIndex(0)
        } else {
            setIndex(prev => prev - 1);
        }

    });

    useEffect( () => {
        const timeline = gsap.timeline();
        timeline.to(".box", {x: distance, duration: 0.5, opacity: 1})
            .fromTo([".background", ".top", ".bottom"], { opacity: 1 },
                {opacity: 0, duration: 0.3, onComplete: () => {
                        bgRef.current.style.backgroundImage = `url(${arr[index]})`;
                        topRef.current.style.backgroundColor = `${arr2[index]}`;
                        bottomRef.current.style.backgroundColor = `${arr2[index]}`;
                        gsap.to([".background", ".top", ".bottom"], {opacity: 1, duration: 0.5 })
                    }}, "<"
            );

        timeline.play()
    },[distance])

    const forward = contextSafe(() => {
        if (distance <= (boxSize + gapSize)*-4) {
            setDistance((boxSize + gapSize)*-4)
        } else {
            setDistance(prev => prev - boxSize - gapSize)
        }

        if (index >= arr.length - 1) {
            setIndex(arr.length - 1)
        } else {
            setIndex(prev => prev + 1);
        }

    })

    const expand = contextSafe((event) => {
        const tween = gsap.to(".float", {bottom: "25%", duration: 0.5,  opacity: 1, ease: "circ"});
        tween.play()
        const tag = event.currentTarget.className.slice(0, 4)
        SetText(data[tag]);
    })



  return (
    <>
        <div className="background-container">
            <div ref={topRef}
                className="top"></div>
            <div
                className="background"
                ref={bgRef}>
            </div>
            <div ref={bottomRef}
                className="bottom"></div>
        </div>
        <Header></Header>
        <div ref={boxRef} className="collection">
                <div ref={box1} onClick={expand} className="box1 box"></div>
                <div ref={box2} onClick={expand} className="box2 box"></div>
                <div ref={box3} onClick={expand} className="box3 box"></div>
                <div ref={box4} onClick={expand} className="box4 box"></div>
                <div ref={box5} onClick={expand} className="box5 box"></div>
                <div ref={box6} onClick={expand} className="box6 box"></div>
        </div>
        <div className="button-group">
            <div className="button-container">
                <Button variant="surface" style={{boxShadow: "5px 10px"}} onClick={back}><BiLeftArrow /></Button>
                <Button variant="surface" style={{boxShadow: "5px 10px"}} onClick={forward}><BiRightArrow /></Button>
            </div>
        </div>
        <UpBox props={text}/>
    </>
  )
}

export default App;
