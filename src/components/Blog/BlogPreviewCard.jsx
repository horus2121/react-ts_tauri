import { Flex, Box, HStack, VStack, Text, Heading, LinkBox, LinkOverlay, Button, Image } from '@chakra-ui/react';

import ChakraLink, { ChakraButtonLink } from '../ChakraLink';

export default function BlogPreviewcard() {
    return (
        <VStack as={LinkBox} spacing='1rem' mb='2rem'>
            <Box>
                <Image src='https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                    rounded='full'
                    width='100%'
                    alt=''
                    objectFit='cover' />
            </Box>

            <Heading>
            </Heading>
            <ChakraLink ChakraComponent={Heading} href='/something' overlay>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ChakraLink>

            <HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
                <Text>Thu 18 2000</Text>
                <Text>100 views</Text>
                <Text>4 min read</Text>
            </HStack>

            <Text noOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint vero quisquam reiciendis molestias fuga obcaecati, ipsa, corrupti quia tenetur nam et repellendus ipsum adipisci hic quasi architecto ipsam aliquid!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam sit, quidem nostrum incidunt natus fugiat maiores in illo magnam adipisci corporis, sapiente nulla eaque voluptas odio et, illum repudiandae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci sequi assumenda perferendis natus ad in inventore modi deserunt, esse vel sit autem veniam expedita numquam! Rerum aut totam doloribus?
            </Text>

            {/* <Button textTransform='uppercase'>
                Read More
            </Button> */}
            <ChakraButtonLink href='/NoPage'>Read more</ChakraButtonLink>
        </VStack>

    )
}