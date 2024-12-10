'use client';

import {
  Tooltip,
  Icon,
  Box,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';

interface FeatureTooltipProps {
  text: string;
}

export default function FeatureTooltip({ text }: FeatureTooltipProps) {
  return (
    <Tooltip
      label={text}
      bg="gray.700"
      color="white"
      p={3}
      rounded="md"
      fontSize="sm"
    >
      <Box display="inline-block" ml={2}>
        <Icon as={FaInfoCircle} color="gray.500" boxSize={3} />
      </Box>
    </Tooltip>
  );
} 