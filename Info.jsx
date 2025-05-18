import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, Portal,
} from "@chakra-ui/react"
import {useState} from "react";

function PopoverCloseButton() {
    return null;
}

export default function Info () {
    const [open, setOpen] = useState(false)

    const info = {
        "title": "Info",
        "name" : "Olutoye Eresanmi. ",
        "Bio": "I am currently studying at a Russell Group University, pursuing a bachelor's degree in Computer Science, specialising in Software Engineering.\n" +
            "I place a strong interest in Programming, Mathematics and Physics, while being fascinated by Artificial Intelligence, specifically in the areas of Machine Learning and Agent-based models.\n" +
            "                        Below are previous ventures i've worked on in the last year, excluding current projects.\n" +
            "                        * Feel free to contact me for any further information."
    }

    return (
        <>
            <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
                <PopoverTrigger asChild>
                    <Button style={{ boxShadow: "10px 10px" }}>{info.title}</Button>
                </PopoverTrigger>
                <Portal>
                    <Popover.Positioner>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader><strong>Name: </strong>{info.name}</PopoverHeader>
                            <PopoverBody dangerouslySetInnerHTML={{ __html: `<strong>Bio:</strong> 
                               ${info.Bio.replace(/\n/g, "<br />")}` }} />
                        </PopoverContent>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>
        </>

    )
};