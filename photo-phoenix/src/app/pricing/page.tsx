'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
  Switch,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheck, FaInfinity, FaRobot, FaTools } from 'react-icons/fa';
import { MdMovie, MdImage, MdUpdate } from 'react-icons/md';
import { BsImages } from 'react-icons/bs';

const plans = [
  {
    name: 'Pro',
    monthlyPrice: '49',
    yearlyPrice: '490',
    description: 'Fully-featured product',
    features: [
      { 
        icon: BsImages,
        text: 'Everything from PhotoPhoenix Lite (all image processing tools), plus:',
        highlight: true 
      },
      { 
        icon: FaInfinity,
        text: 'Unlimited AI image variations',
      },
      { 
        icon: MdMovie,
        text: 'Unlimited batch processing',
      },
      { 
        icon: FaRobot,
        text: 'Advanced AI models access',
      },
      { 
        icon: FaTools,
        text: 'Custom editing presets',
      },
      { 
        icon: MdUpdate,
        text: 'Priority updates & support',
      },
      { 
        icon: FaCheck,
        text: 'API access (beta)',
      },
    ],
  },
  {
    name: 'Lite',
    monthlyPrice: '19',
    yearlyPrice: '190',
    description: 'Essential tools and core features',
    features: [
      { 
        icon: MdImage,
        text: 'Up to 1000 AI variations/month',
      },
      { 
        icon: BsImages,
        text: 'Basic platform optimization',
      },
      { 
        icon: FaRobot,
        text: 'Standard AI models',
      },
      { 
        icon: MdMovie,
        text: 'Basic batch processing (up to 100 images)',
      },
      { 
        icon: FaTools,
        text: 'Standard editing tools',
      },
      { 
        icon: MdUpdate,
        text: 'Regular updates',
      },
      { 
        icon: FaCheck,
        text: 'Email support',
      },
    ],
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Box bg="gray.900" minH="100vh" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12}>
          <Heading
            fontSize={{ base: '4xl', md: '5xl' }}
            bgGradient="linear(to-r, blue.400, purple.500)"
            backgroundClip="text"
            textAlign="center"
          >
            Simple, Transparent Pricing
          </Heading>
          <Text fontSize="xl" color="gray.400" textAlign="center">
            Choose the plan that best fits your needs
          </Text>
          
          {/* Billing Toggle */}
          <HStack spacing={4}>
            <Text color="gray.400">Monthly</Text>
            <Switch
              size="lg"
              colorScheme="blue"
              isChecked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <Text color="gray.400">
              Yearly <Text as="span" color="green.400">(Save 20%)</Text>
            </Text>
          </HStack>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {plans.map((plan) => (
            <Box
              key={plan.name}
              bg="gray.800"
              borderRadius="xl"
              overflow="hidden"
              className="glass-effect"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              {/* Header */}
              <Box p={8} bg="rgba(0,0,0,0.2)">
                <Text color="blue.400" mb={2}>{plan.name}</Text>
                <HStack align="baseline" spacing={2}>
                  <Text fontSize="4xl" fontWeight="bold" color="white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </Text>
                  <Text color="gray.400">/{isYearly ? 'year' : 'mo'}</Text>
                </HStack>
                <Text color="gray.400" fontSize="sm">
                  {plan.description}
                </Text>
              </Box>

              {/* Features */}
              <VStack align="stretch" p={8} spacing={4}>
                {plan.features.map((feature, index) => (
                  <HStack
                    key={index}
                    spacing={3}
                    bg={feature.highlight ? 'rgba(66, 153, 225, 0.1)' : 'transparent'}
                    p={feature.highlight ? 4 : 2}
                    borderRadius="md"
                  >
                    <Icon 
                      as={feature.icon} 
                      color={feature.highlight ? 'blue.400' : 'gray.400'} 
                      boxSize={5}
                    />
                    <Text 
                      color={feature.highlight ? 'blue.400' : 'gray.300'}
                      fontSize="sm"
                    >
                      {feature.text}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              {/* CTA Button */}
              <Box p={8} pt={0}>
                <Button
                  w="full"
                  size="lg"
                  bgGradient="linear(to-r, blue.500, purple.500)"
                  _hover={{
                    bgGradient: "linear(to-r, blue.600, purple.600)",
                  }}
                  color="white"
                >
                  Get {plan.name}
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* FAQ Section */}
        <VStack spacing={8} mt={20}>
          <Heading color="gray.100" size="xl">Frequently Asked Questions</Heading>
          {/* Add FAQ items here */}
        </VStack>
      </Container>
    </Box>
  );
} 