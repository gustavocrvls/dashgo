import { Stack, Flex, Input, Button, FormLabel, FormControl } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Stack
        spacing="4"
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
      >
        <FormControl>
          <FormLabel htmlFor="email">
            E-mail
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            focusBorderColor="pink.500"
            bg="gray.900"
            variant="filled"
            size="lg"
            _hover={{
              bgColor: 'gray.900'
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">
            Password
          </FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            focusBorderColor="pink.500"
            bg="gray.900"
            variant="filled"
            size="lg"
            _hover={{
              bgColor: 'gray.900'
            }}
          />
        </FormControl>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Stack>
    </Flex>
  )
}
