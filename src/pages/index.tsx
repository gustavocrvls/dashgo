import { Stack, Flex, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (
    values: SignInFormData
  ) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Stack
        spacing="4"
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Input
          name="email"
          label="E-mail"
          type="email"
          {...register("email")}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          {...register("password")}
        />

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Stack>
    </Flex>
  );
}
