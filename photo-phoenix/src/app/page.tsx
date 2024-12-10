'use client';

import {
  Box,
  Button,
  Container,
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
    <Box bg="gray.900" color="white">
      {/* Hero Section */}
      <Box 
        w="full" 
        bgGradient="linear(to-b, blue.900, gray.900)"
        pt={{ base: 12, md: 16 }}
        pb={{ base: 12, md: 16 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW={{ base: '95%', xl: '1440px' }}>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={8} align="center">
            {/* Left side - Image */}
            <Box flex={1} textAlign="center">
              <Image
                className="floating"
                src="/photophoenix.png"
                alt="PhotoPhoenix Logo"
                width={500}
                height={500}
                style={{ 
                  filter: 'drop-shadow(0px 0px 20px rgba(66, 153, 225, 0.5))',
                  display: 'inline-block'
                }}
              />
            </Box>
            
            {/* Right side - Content */}
            <VStack flex={1} spacing={6} align="start">
              <Heading
                fontSize={{ base: '4xl', md: '6xl' }}
                bgGradient="linear(to-r, blue.400, purple.500)"
                backgroundClip="text"
                fontWeight="extrabold"
              >
                PhotoPhoenix
              </Heading>
              <Heading size="xl" color="gray.100">
                Automate Your Social Media Image Creation
              </Heading>
              <Text fontSize="lg" color="gray.400">
                Create unique variations of your images in seconds with our AI-powered platform.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  size="lg"
                  bgGradient="linear(to-r, blue.500, purple.500)"
                  color="white"
                  height="4rem"
                  px="2rem"
                  fontSize="1.2rem"
                  _hover={{
                    bgGradient: "linear(to-r, blue.600, purple.600)",
                  }}
                >
                  Try For Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="blue.400"
                  color="blue.400"
                  height="4rem"
                  px="2rem"
                  fontSize="1.2rem"
                >
                  Watch Demo
                </Button>
              </Stack>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bg="gray.800" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <Heading textAlign="center" color="gray.100">
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
      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
          <Box>
            <Heading mb={6} color="gray.100">Stop Wasting Time on Manual Edits</Heading>
            <Text fontSize="lg" color="gray.400">
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

      {/* Email Collection */}
      <Box bg="gray.800" w="full" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} className="glass-effect" p={10} rounded="xl">
            <Heading size="lg" textAlign="center" color="gray.100">
              Join the Waitlist
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="2xl" color="gray.400">
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
                bg="gray.700"
                border="1px solid"
                borderColor="gray.600"
                _hover={{ borderColor: 'blue.400' }}
                _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)' }}
                w={{ base: 'full', md: '400px' }}
              />
              <Button
                size="lg"
                bgGradient="linear(to-r, blue.500, purple.500)"
                _hover={{
                  bgGradient: "linear(to-r, blue.600, purple.600)",
                }}
                px={8}
              >
                Join Waitlist
              </Button>
            </Stack>
            <Text fontSize="sm" color="gray.500">
              By joining, you agree to receive updates about PhotoPhoenix
            </Text>
          </VStack>
        </Container>
      </Box>
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
    transition="all 0.3s"
    _hover={{
      transform: 'translateY(-8px)',
      shadow: '2xl',
    }}
  >
    <Icon as={icon} w={12} h={12} color="blue.500" />
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{description}</Text>
  </VStack>
);

