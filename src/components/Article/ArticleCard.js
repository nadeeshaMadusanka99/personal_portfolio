import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const FramerImage = motion(Image);
export const ArticleCard = ({ title, summary, time, link, img }) => {

    const truncateText = (text, maxChars) => {
        return text.length > maxChars ? `${text.slice(0, maxChars)}...` : text;
    };
    return (
        <motion.article
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
        >
            <li className="relative col-span-1 w-full p-4 rounded-2xl ring-2 ring-zinc-300 border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200  dark:shadow-md dark:border-zinc-500 dark:bg-card dark:text-light dark:ring-zinc-300 dark:shadow-zinc-200">
                <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>

                    <FramerImage src={img} alt={title} className="w-full h-[300px] object-cover" whileHover={{ scale: 1.075 }} transition={{ duration: 0.2 }} />
                </Link>
                <Link href={link} target='_blank' >
                    <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
                </Link>
                <p className='text-sm mb-2' >{truncateText(summary, 300)}</p>
                <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
            </li>
        </motion.article>

    )
}


