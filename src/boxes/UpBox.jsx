import "./UpBox.css"
import {gsap} from "gsap";
import React from "react";
import {useGSAP} from "@gsap/react";
import {Avatar, Card} from "@chakra-ui/react";

function UpBox({props}) {
    const {contextSafe} = useGSAP();

    const down = contextSafe(() => {
        const tween = gsap.to(".float", {y: 0, duration: 0.3, opacity: 1});
        tween.play()
    })
    return (
        <>
            <div>
                <div onClick={down}
                    className="float">
                    <Card.Root width="66%" borderRadius="40px" marginLeft="16%" >
                        <Card.Body gap="2">
                            <div className="card-header">
                                <Avatar.Root size="sm" shape="rounded" width="130px" height="130px">
                                    <Avatar.Image src="https://picsum.photos/200/300" />
                                    <Avatar.Fallback name={props.name} />
                                </Avatar.Root>
                                <div className="card-header-top">
                                    <Card.Title mt="2" width="100%" height="40px" >{props.name}</Card.Title>
                                    <Card.Description >
                                        {props.text}
                                    </Card.Description>
                                </div>
                            </div>
                            <Card.Description>
                                {props.description}
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                        </Card.Footer>
                    </Card.Root>
                </div>
            </div>
        </>
    )
}

export default UpBox;