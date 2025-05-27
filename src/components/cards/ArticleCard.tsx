'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface ArticleCardProps {
  image: string;
  author: string;
  title: string;
  excerpt: string;
}

export default function ArticleCard({ image, author, title, excerpt }: ArticleCardProps) {
  return (
    <motion.article 
      className="bg-neutral-white rounded-lg overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="relative aspect-[1.66] w-full overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="p-6 md:p-8">
        <span className="text-[10px] text-neutral-grayishBlue">
          By {author}
        </span>
        <motion.h3 
          className="text-primary-darkBlue hover:text-primary-limeGreen cursor-pointer mt-2 mb-2 text-[16px] leading-tight"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {title}
        </motion.h3>
        <p className="text-[13px] leading-relaxed text-neutral-grayishBlue">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );
}
