import "./Header.css"
import {Button, ButtonGroup} from "@chakra-ui/react";
import Popout from "./Popout.jsx";
import {gsap} from "gsap";
import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin";
import {useGSAP} from "@gsap/react";
import LinkBox from "@/LinkBox.jsx";


function Header(){
    const {contextSafe} = useGSAP();
    let clicked = false;
    gsap.registerPlugin(ScrambleTextPlugin)
    const Publication = {
        name: "Publications",
        description: "Publications coming soon",
    }

    const handleClick = contextSafe( () => {
        if (clicked) {
            clicked = false;
            const tween = gsap.to(".heading", {
                scrambleText: {
                    text: "HELLO",
                    chars: "uppercase",
                    speed: 0.5,
                    tweenLength: true
                }})
            tween.play()
        } else {
            clicked = true
            const tween = gsap.to(".heading", {
                scrambleText: {
                    text: "WELCOME",
                    chars: "uppercase",
                    speed: 0.5,
                }})
            tween.play()
        }
    })


    return (
        <>
            <div className="header">
                <Button variant="subtle"
                    className="heading"
                    onClick={handleClick}>
                    HELLO
                </Button>
                <ButtonGroup variant="surface" wrap="wrap" size="lg">
                        <div className="group-inner">
                            <Button style={{ boxShadow: "10px 10px" }}>PROJECTS</Button>
                            <Popout title={Publication} />
                            <LinkBox style={{ boxShadow: "10px 10px" }} />
                        </div>
                    </ButtonGroup>
            </div>
        </>
    )
}
export default Header