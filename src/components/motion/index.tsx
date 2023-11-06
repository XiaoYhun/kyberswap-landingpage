"use client";
// framer-motion has issue with server side rendering, need to wrap all files using motion.xxx in "use client" as above, this is a know bug and being fixed by them
import { motion } from "framer-motion";

export const MotionDiv = motion.div;
