'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import FAQ from '@/components/FAQ';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'For personal use',
    features: [
      { text: '100 images/month', included: true },
      { text: 'Basic image optimization', included: true },
      { text: 'Standard quality exports', included: true },
      { text: 'Community support', included: true },
      { text: 'Batch processing', included: false },
      { text: 'Priority support', included: false },
      { text: 'API access', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '49',
    popular: true,
    description: 'For professionals',
    features: [
      { text: 'Unlimited images', included: true },
      { text: 'Advanced optimization suite', included: true },
      { text: 'High quality exports', included: true },
      { text: 'Priority support', included: true },
      { text: 'Bulk processing', included: true },
      { text: 'Custom presets', included: true },
      { text: 'API access', included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <Box bg="gray.900" minH="100vh" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading
              fontSize={{ base: '4xl', md: '5xl' }}
              bgGradient="linear(to-r, blue.400, purple.500)"
              backgroundClip="text"
            >
              Simple Pricing
            </Heading>
            <Text fontSize="xl" color="gray.400">
              Start for free, upgrade when you need more
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full" maxW="4xl" mx="auto">
            {plans.map((plan) => (
              <Box
                key={plan.name}
                bg="gray.800"
                p={8}
                rounded="2xl"
                position="relative"
                className="glass-effect"
                border="1px solid"
                borderColor={plan.popular ? "blue.400" : "transparent"}
              >
                {plan.popular && (
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                    bg="blue.500"
                    px={3}
                    py={1}
                    rounded="full"
                    fontSize="sm"
                  >
                    Popular
                  </Box>
                )}

                <VStack spacing={6} align="stretch">
                  <VStack align="start" spacing={2}>
                    <Text color="gray.400">{plan.description}</Text>
                    <HStack>
                      <Text fontSize="5xl" fontWeight="bold" color="white">
                        ${plan.price}
                      </Text>
                      <Text color="gray.400">/month</Text>
                    </HStack>
                  </VStack>

                  <Button
                    size="lg"
                    w="full"
                    bgGradient={plan.popular ? "linear(to-r, blue.500, purple.500)" : undefined}
                    bg={plan.popular ? undefined : "gray.700"}
                    color="white"
                    _hover={{
                      bgGradient: plan.popular ? "linear(to-r, blue.600, purple.600)" : undefined,
                      bg: plan.popular ? undefined : "gray.600",
                    }}
                  >
                    {plan.price === '0' ? 'Get Started' : 'Subscribe Now'}
                  </Button>

                  <List spacing={3}>
                    {plan.features.map((feature, index) => (
                      <ListItem
                        key={index}
                        color={feature.included ? "gray.100" : "gray.500"}
                        display="flex"
                        alignItems="center"
                      >
                        <ListIcon
                          as={feature.included ? FaCheck : FaTimes}
                          color={feature.included ? "green.400" : "red.400"}
                        />
                        {feature.text}
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <VStack spacing={8} w="full" maxW="4xl" mx="auto">
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              bgGradient="linear(to-r, blue.400, purple.500)"
              backgroundClip="text"
            >
              Frequently Asked Questions
            </Heading>
            <FAQ />
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
} 