"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import DropdownIcon from "components/SVG/DropdownIcon";
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  target?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Products",
    children: [
      {
        label: "DEX Aggregator",
        subLabel: "",
        href: "#",
      },
      {
        label: "Liquidity Protocols",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "KyberAI",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Limit Orders",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Governance",
    children: [
      {
        label: "KyberDAO",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "KNC",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
  },
  {
    label: "Developers",
    href: "#",
  },
  {
    label: "Blog",
    href: "https://blog.kyberswap.com/",
    target: "_blank",
  },
  {
    label: "Help Center",
    href: "https://support.kyberswap.com/hc/en-us",
    target: "_blank",
  },
];

export default function Header() {
  return (
    <Box as="header" backdropFilter="blur(32px)" bgColor="blackAlpha.50" position="fixed" width="100%" zIndex={2}>
      <Flex color="whiteAlpha.600" minH="60px" py={{ base: 2 }} px={{ base: 4 }} justify="space-between">
        <Flex grow={1} shrink={0} justify={{ base: "end" }} cursor="pointer">
          <motion.div whileHover={{ rotate: "-4deg" }}>
            <Image src="/assets/images/logo-dark.svg" alt="Kyberswap logo" width={140} height={46} />
          </motion.div>
        </Flex>
        <Container flexShrink={1} ml={10}>
          <DesktopNav />
        </Container>
        <Flex grow={1} shrink={0} justify="start" direction={"row"}>
          <Button variant="solid" colorScheme="green" as="a" href="https://kyberswap.com/swap/ethereum" target="_blank">
            Launch App
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkHoverColor = "whiteAlpha.800";

  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement={"bottom-start"} openDelay={0} closeDelay={0} offset={[0, 0]}>
            <PopoverTrigger>
              <Flex
                as="a"
                p={2}
                h={12}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                align="center"
                gap={1}
                role="group"
              >
                <Text _groupHover={{ color: linkHoverColor }} transition="all .3s ease">
                  {navItem.label}
                </Text>
                {navItem.children && (
                  <Flex
                    sx={{ transform: "rotate(180deg)" }}
                    _groupHover={{ transform: "rotate(0deg)", color: linkHoverColor }}
                    transition="all .3s ease"
                  >
                    <DropdownIcon />
                  </Flex>
                )}
                {navItem.children && (
                  <PopoverContent border={0} boxShadow={"xl"} bg="grey.900" p={4} rounded={20}>
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Flex>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box display={"block"} p={2} rounded={"md"} _hover={{ color: "green.400" }}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {label}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="gray.800" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, target }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        target={target ?? "_self"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.200">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor="gray.700" align={"start"}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
