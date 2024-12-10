'use client';

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { FaBuilding, FaHeadset, FaRocket } from 'react-icons/fa';

export default function EnterpriseContact() {
  return (
    <Box
      bg="gray.800"
      p={8}
      rounded="xl"
      className="glass-effect"
      mt={16}
    >
      <VStack spacing={6} align="stretch">
        <Heading size="lg" color="white">Enterprise Solution</Heading>
        <Text color="gray.400">
          Need a custom solution for your organization? We offer tailored plans with:
        </Text>
        
        <HStack spacing={8}>
          <VStack align="start" spacing={4}>
            <HStack color="gray.300">
              <Icon as={FaBuilding} />
              <Text>Custom Integration</Text>
            </HStack>
            <HStack color="gray.300">
              <Icon as={FaHeadset} />
              <Text>Dedicated Support</Text>
            </HStack>
            <HStack color="gray.300">
              <Icon as={FaRocket} />
              <Text>Advanced Features</Text>
            </HStack>
          </VStack>
        </HStack>

        <Button
          size="lg"
          variant="outline"
          colorScheme="blue"
          onClick={() => window.location.href = 'mailto:enterprise@photophoenix.com'}
        >
          Contact Sales
        </Button>
      </VStack>
    </Box>
  );
} 