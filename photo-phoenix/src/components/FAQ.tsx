'use client';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What image formats do you support?",
    answer: "We support all major formats including JPG, PNG, WEBP, AVIF, and GIF. You can convert between any formats while maintaining quality."
  },
  {
    question: "How does bulk processing work?",
    answer: "Simply upload multiple images at once, select your desired modifications (resize, format, compression, etc.), and process them all with one click. Download individually or as a zip file."
  },
  {
    question: "What's the maximum file size and batch limit?",
    answer: "Free plan supports up to 5MB per image and 100 images per month. Pro plan increases this to 25MB per image and unlimited monthly processing."
  },
  {
    question: "How do you ensure images pass platform checks?",
    answer: "Our optimization algorithms are specifically designed to maintain image quality while staying within platform guidelines. We regularly update our processing to match platform requirements."
  },
  {
    question: "Can I save my processing settings?",
    answer: "Pro users can create and save custom presets for different platforms or use cases, making batch processing even faster."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
  }
];

export default function FAQ() {
  return (
    <Accordion allowMultiple width="100%">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          border="none"
          mb={4}
          bg="gray.800"
          rounded="lg"
          className="glass-effect"
        >
          <AccordionButton
            p={6}
            _hover={{ bg: 'rgba(66, 153, 225, 0.1)' }}
            rounded="lg"
          >
            <Box flex="1" textAlign="left" color="gray.100" fontWeight="medium">
              {item.question}
            </Box>
            <Icon as={FaChevronDown} color="blue.400" />
          </AccordionButton>
          <AccordionPanel pb={6} px={6} color="gray.400">
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
} 