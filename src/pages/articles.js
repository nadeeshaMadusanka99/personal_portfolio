import AnimatedText from '@/components/Common/AnimatedText'
import Layout from '@/components/Common/Layout'
import Head from 'next/head'
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { ArticleCard } from '@/components/Article/ArticleCard';
import { dataArticle } from '@/content/Articles';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(evt) {
        imgRef.current.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(evt) {
        imgRef.current.display = "none";
        x.set(0);
        y.set(0);
    }


    return (
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg" />
        </Link>
    )
}

// const Article = ({ title, date, link, img }) => {
//     return (
//         <li className="realtive w-full py-6 my-4 rounded-xl flex items-center justify-between first:mt-0  ring-2 ring-zinc-300 border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200  p-12  dark:shadow-md dark:border-zinc-500 dark:bg-card dark:text-light dark:ring-zinc-300 dark:shadow-zinc-200 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
//             <MovingImg title={title} img={img} link={link} />
//             <p className='text-primary font-semibold pl-4 dark:text-primaryDark'>{date}</p>
//         </li>
//     )
// }




const articles = () => {
    return (
        <>
            <Head>
                <title>Nadeesha Profile | Articles Page</title>
                <meta
                    name="nadeeshaprofile"
                    content="nadeesha's portfolio about page"
                />
            </Head>
            <main className="flex w-full flex-col items-center justify-between dark:text-light">
                <Layout className="pt-8">
                    <AnimatedText
                        text="Words Can Change The World!"
                        className="text-7xl mb-20 lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8"
                    />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-4 sm:gap-2 xs:gap-0 sm:grid-cols-1'>
                        {
                            dataArticle.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    title={article.title}
                                    summary={article.summary}
                                    time={article.time}
                                    link={article.link}
                                    img={article.img}
                                />
                            ))
                        }
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
