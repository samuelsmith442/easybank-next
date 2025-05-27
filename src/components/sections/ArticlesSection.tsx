'use client';

import ArticleCard from "../cards/ArticleCard";
import { motion } from "framer-motion";

interface Article {
  image: string;
  author: string;
  title: string;
  excerpt: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <section className="bg-neutral-veryLightGray py-16 md:py-24">
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-[32px] md:text-[36px] leading-tight font-light text-primary-darkBlue mb-8 md:mb-10 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
