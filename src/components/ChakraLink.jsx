import { Link, Text, Button, Box, LinkOverlay, useColorMode } from '@chakra-ui/react';

export default function ChakraLink({ href, ChakraComponent = Box, children, chakraLinkProps = {}, noUnderline, overlay, ...props }) {

    const LinkComponent = overlay ? LinkOverlay : Link

    if (noUnderline) {
        chakraLinkProps._hover = chakraLinkProps._hover || {}
        chakraLinkProps._hover.textDecoration = 'none'
    }

    return (
        <LinkComponent href={href} passHref {...chakraLinkProps}>
            <ChakraComponent {...props}>{children}</ChakraComponent>
        </LinkComponent>
    )
}

const ChakraButtonLink = (props) => {
    return (
        <ChakraLink ChakraComponent={Button} noUnderline {...props} />
    )
}

export { ChakraButtonLink }