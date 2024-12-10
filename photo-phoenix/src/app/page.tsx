'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Input,
} from '@chakra-ui/react';
import { FaRobot, FaImages, FaInfinity, FaTools } from 'react-icons/fa';
import { MdUpdate, MdSecurity } from 'react-icons/md';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="container.xl" py={20}>
        <Stack spacing={8} alignItems="center" textAlign="center">
          <Image 
            src="/photophoenix.png" 
            alt="PhotoPhoenix Logo" 
            width={150} 
            height={150} 
            style={{ margin: '2rem 0' }}
          />
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, blue.400, purple.500)"
            backgroundClip="text"
          >
            PhotoPhoenix
          </Heading>
          <Heading size="xl" maxW="800px">
            Automate Your Social Media Image Creation
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="800px">
            Create unique variations of your images in seconds. Our AI-powered platform 
            helps you avoid duplicate content penalties while maintaining brand consistency 
            across all social media platforms.
          </Text>
          <Button
            size="lg"
            colorScheme="blue"
            height="4rem"
            px="2rem"
            fontSize="1.2rem"
          >
            Try For Free
          </Button>
        </Stack>
      </Container>

      {/* Email Collection Section */}
      <Box bg="blue.50" w="full" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading size="lg" textAlign="center">
              Join the Waitlist
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="2xl">
              Be among the first to experience automated social media image creation. 
              Get early access and special launch pricing.
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              w={{ base: 'full', md: 'auto' }}
              maxW="xl"
            >
              <Input
                placeholder="Enter your email"
                size="lg"
                bg="white"
                w={{ base: 'full', md: '400px' }}
              />
              <Button
                size="lg"
                colorScheme="blue"
                px={8}
              >
                Join Waitlist
              </Button>
            </Stack>
            <Text fontSize="sm" color="gray.600">
              By joining, you agree to receive updates about PhotoPhoenix
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Main Features */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <Heading textAlign="center">
              Save Hours of Manual Image Editing
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <FeatureCard
                icon={FaRobot}
                title="Smart AI Technology"
                description="Our AI creates subtle variations that look natural while keeping your brand identity intact."
              />
              <FeatureCard
                icon={FaImages}
                title="Bulk Processing"
                description="Upload multiple images and get hundreds of unique variations in minutes, not hours."
              />
              <FeatureCard
                icon={FaInfinity}
                title="Platform Ready"
                description="Every image is automatically optimized for each social media platform's requirements."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxW="container.xl" py={{ base: 16, md: 24, lg: 32 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Box>
            <Heading mb={6}>Stop Wasting Time on Manual Edits</Heading>
            <Text fontSize="lg" color="gray.600">
              Social media managers spend hours creating image variations to avoid 
              duplicate content penalties. PhotoPhoenix automates this entire process, 
              letting you focus on strategy and engagement instead of repetitive editing tasks.
            </Text>
          </Box>
          <SimpleGrid columns={2} spacing={8}>
            <FeatureBox
              icon={MdUpdate}
              title="Always Updated"
              description="Automatic updates for platform changes"
            />
            <FeatureBox
              icon={FaTools}
              title="Powerful Tools"
              description="Advanced batch editing features"
            />
            <FeatureBox
              icon={MdSecurity}
              title="100% Secure"
              description="Your content is always protected"
            />
            <FeatureBox
              icon={FaInfinity}
              title="No Limits"
              description="Process as many images as you need"
            />
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// Helper Components
interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureProps) => (
  <VStack align="start" spacing={2}>
    <Icon as={icon} w={6} h={6} color="blue.500" />
    <Heading size="sm">{title}</Heading>
    <Text fontSize="sm" color="gray.600">{description}</Text>
  </VStack>
);

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <VStack
    bg="white"
    p={8}
    rounded="xl"
    shadow="xl"
    spacing={4}
    align="start"
    height="full"
  >
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{description}</Text>
  </VStack>
);
