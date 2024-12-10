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
    question: "What's included in the free trial?",
    answer: "Our 7-day free trial includes access to all Pro features, allowing you to test the full capabilities of PhotoPhoenix before making a decision."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. The price difference will be prorated for your billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with PhotoPhoenix, we'll refund your payment with no questions asked."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and cryptocurrency payments through Stripe."
  },
  {
    question: "Is there a limit to how many images I can process?",
    answer: "The Lite plan includes up to 1000 AI variations per month. The Pro plan has no limits on processing."
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