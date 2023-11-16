import { motion } from "framer-motion";
import { ArrowUpRight } from "react-feather";
import { useState } from "react";
import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";

const ButtonWithAnimatedArrowUpRight = forwardRef<{ arrowSize?: number } & ButtonProps, "button">(
  ({ arrowSize = 24, children, ...props }, ref) => {
    const [onHover, setOnHover] = useState(false);
    const distance = arrowSize * 1.5;
    return (
      <Button
        {...(props as any)}
        ref={ref}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <>
          {children}
          <div style={{ overflow: "hidden", width: "fit-content" }}>
            <motion.div
              animate={{ x: onHover ? `${distance}px` : "0px", y: onHover ? `-${distance}px` : "0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              style={{ position: "relative" }}
            >
              <ArrowUpRight size={arrowSize} />
              <ArrowUpRight
                size={arrowSize}
                style={{ position: "absolute", left: `-${distance}px`, top: `${distance}px` }}
              />
            </motion.div>
          </div>
        </>
      </Button>
    );
  }
);

export default ButtonWithAnimatedArrowUpRight;
