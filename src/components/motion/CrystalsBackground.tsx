import { Box } from "@chakra-ui/react";
import crystal1 from "assets/images/crystals/crystals-1.png";
import crystal2 from "assets/images/crystals/crystals-2.png";
import crystal3 from "assets/images/crystals/crystals-3.png";
import crystal4 from "assets/images/crystals/crystals-4.png";
import crystal5 from "assets/images/crystals/crystals-5.png";
import Image from "next/image";

export default function CrystalsBackground() {
  return (
    <Box position="absolute" top="0" left="0" right="0" w="100%">
      <Image src={crystal1} alt="crystal" />
      <Image src={crystal2} alt="crystal" />
      <Image src={crystal3} alt="crystal" />
      <Image src={crystal4} alt="crystal" />
      <Image src={crystal5} alt="crystal" />
    </Box>
  );
}
