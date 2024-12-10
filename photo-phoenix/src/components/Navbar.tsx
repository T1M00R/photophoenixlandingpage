'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box 
      bg="gray.900" 
      position="sticky" 
      top={0} 
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="gray.800"
      className="glass-effect"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <NextLink href="/" passHref>
            <HStack spacing={2} cursor="pointer">
              <Image
                src="/photophoenix.png"
                alt="PhotoPhoenix"
                width={8}
                height={8}
              />
              <Box 
                fontSize="xl" 
                fontWeight="bold"
                bgGradient="linear(to-r, blue.400, purple.500)"
                backgroundClip="text"
              >
                PhotoPhoenix
              </Box>
            </HStack>
          </NextLink>

          <HStack spacing={8}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                as={NextLink}
                href={item.href}
                color={pathname === item.href ? 'blue.400' : 'gray.400'}
                _hover={{ color: 'blue.400' }}
                fontWeight="medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              as={NextLink}
              href="/pricing"
              bgGradient="linear(to-r, blue.500, purple.500)"
              color="white"
              _hover={{
                bgGradient: "linear(to-r, blue.600, purple.600)",
              }}
            >
              Get Started
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
} 