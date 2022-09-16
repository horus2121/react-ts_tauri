import { Box, Flex, Heading } from '@chakra-ui/react';

import BlogPreviewCard from './BlogPreviewCard';

export default function BlogPreviewList() {
    return (
        <Box mt={8} mb={16}>
            <Flex justifyContent='center'>
                <Heading
                    sx={{
                        textTransform: 'uppercase',
                        mb: 8,
                        fontSize: '5xl'
                    }}>
                    Blog List
                </Heading>
            </Flex>

            {Array(10).fill(0).map(() => (
                <BlogPreviewCard key={() => x++} />
            ))}
        </Box>
    )
}