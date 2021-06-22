import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Carvalho</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          gustavocrvl42@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gustavo Carvalho" src="https://github.com/gustavocrvls.png" />
    </Flex>
  )
}