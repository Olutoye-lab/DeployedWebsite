import {Button, Card, CardBody, Popover, Portal} from "@chakra-ui/react"
import { useState } from "react"

export default function Popout ({title}) {
    const [open, setOpen] = useState(false)
    return (
        <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Popover.Trigger asChild>
                <Button size="lg" style={{ boxShadow: "10px 10px" }}>
                    {title.name}
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            {title.description}
                        </Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
};