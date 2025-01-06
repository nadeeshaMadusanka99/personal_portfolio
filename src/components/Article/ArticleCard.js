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
            className="relative sm:mb-10"
        >
            <div className="relative  col-span-1 w-full p-4 rounded-2xl ring-2 ring-zinc-300 border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200  dark:shadow-md dark:border-zinc-500 dark:bg-card dark:text-light dark:ring-zinc-300 dark:shadow-zinc-200">
                <div
                    className="overflow-hidden rounded-lg lg:w-full "
                >
                    <FramerImage priority src={img} alt={title} className="w-full h-[300px] object-cover  rounded-xl" whileHover={{ scale: 1.075 }} transition={{ duration: 0.2 }} />
                </div>
                <Link href={link} target='_blank' >
                    <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
                </Link>
                <p className='text-sm mb-6' >{truncateText(summary, 250)}</p>
                <div className='flex items-center justify-between'>
                    <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
                    <Link
                        href={link}
                        target="_blank"
                        className="rounded-lg bg-dark text-light p-1 px-4 text-md font-semibold hover:bg-light hover:text-dark hover:border-2 hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:hover:border-2 sm:px-4 sm:text-base"
                    >
                        View Article
                    </Link>
                </div>
            </div>
        </motion.article>

    )
}


