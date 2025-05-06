import { Button, Menu, Portal, useClipboard } from "@chakra-ui/react"

function Demo () {
    const clipboard = useClipboard({ value: "olutoyeeresami@gmail.com" })

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button style={{ boxShadow: "10px 10px" }}>
                    Contact
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item onClick={clipboard.copy} value="Gmail">
                            {clipboard.copied ? "Copied" : "Gmail"}
                        </Menu.Item>
                        <Menu.Item onClick={() => window.open('https://www.linkedin.com/in/olutoye-eresanmi/',  '_blank')} value="LinkedIn">
                            {clipboard.copied ? "LinkedIn" : "LinkedIn"}
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}
export default Demo;
