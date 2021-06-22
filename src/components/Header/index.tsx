import { HStack, Flex, Text, Input, Icon, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxW={1480}
      h="20"
      marginX="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      <SearchBox/>
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav/>
        <Profile />
      </Flex>
    </Flex>
  );
}