import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, List, ListItem, Heading } from '@chakra-ui/react';

import ChakraLink from './ChakraLink';
import ToggleColorModeButton from './ToggleColorModeButton';

const DrawerList = ({ onClose }) => {
    const listItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Anywhere',
            path: '/whatever'
        }
    ]

    return (
        <List>
            {
                listItems.map((item) => (
                    <ChakraLink
                        key={() => Math.random() * 100}
                        ChakraComponent={ListItem}
                        sx={{ display: 'block', mt: 5, fontSize: 'lg' }}
                        href={item.path}
                        chakraLinkProps={{ _focus: { outline: 0 } }}
                        onClick={onClose}
                    >
                        {item.name}
                    </ChakraLink>
                ))
            }
        </List>
    )
}

export default function AppDrawer({ isOpen, onClose }) {
    return (
        <Drawer size='xs' placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader py={8}>
                    <Heading>Blogs!</Heading>
                </DrawerHeader>

                <DrawerBody>
                    <DrawerList />
                </DrawerBody>

                <ToggleColorModeButton />

            </DrawerContent>
        </Drawer>
    )
}