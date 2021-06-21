import { Stack, Flex, Button } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
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
        <Input name="email" label="E-mail" type="email" />
        <Input name="password" label="Senha" type="password" />
        
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
