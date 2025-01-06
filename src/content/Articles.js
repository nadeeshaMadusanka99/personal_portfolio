import { v4 as uuid } from 'uuid';
import {
    behindloginscreen,
    bussimulate,
    cannyedge,
    cryptography,
    formikandyup,
    gaming,
    git,
    honeypot,
    linearregression,
    pkce,
    steganography,
    webworks,
} from "@/imports";


export const dataArticle = [
    {
        id: uuid(),
        title: "Honeypots: Inspired by Mr.Robot",
        summary: "While watching the 8th episode of Mr. Robot season 01, I heard the term ‘honeypot’ for the first time. It caught my attention because the idea of setting up fake systems to trick hackers seemed really interesting. I wanted to know more, so I looked into it. What I found was something truly clever. It’s an effective tool that helps stop cybercriminals in their tracks.",
        time: "7 min read",
        img: honeypot,
        link: "https://medium.com/@nadeeshamadusanka44/honeypots-inspired-by-mr-robot-fa6e44ae723e",
    },
    {
        id: uuid(),
        title: "Understanding Mutex and Semaphores: Senate Bus Stop",
        summary: "Concurrent programming is a fundamental concept in modern software development, where multiple processes or threads execute simultaneously. However, this concurrent execution brings challenges like race conditions, deadlocks, and resource contention. Two primary tools to handle these challenges are mutex and semaphores."
        , time: "8 min read",
        img: bussimulate,
        link: "https://medium.com/@nadeeshamadusanka44/understanding-mutex-and-semaphores-senate-bus-stop-simulation-18a61ae3c4d4"
    },
    {
        id: uuid(),
        title: "Canny Edge Detection Explained: A Step-by-Step Guide",
        summary: "Hello there! Recently, I had the opportunity to work on Canny Edge Detection as part of a university assignment and it was very interesting to explore how it works. Canny Edge Detection is a powerful technique used in image processing to identify the edges of objects within an image. This method is widely used in various applications, from computer vision to robotics."
        , time: "7 min read",
        img: cannyedge,
        link: "https://medium.com/@nadeeshamadusanka44/canny-edge-detection-explained-a-step-by-step-guide-f51dad94fa9b"
    },
    {
        id: uuid(),
        title: "Best Fit, Best Forecast: The Linear Regression Journey",
        summary: "Linear regression is a fundamental statistical technique used to model the relationship between a dependent variable and one or more independent variables. It assumes this relationship is linear, meaning it can be represented by a straight line on a graph."
        , time: "12 min read",
        img: linearregression,
        link: "https://medium.com/@nadeeshamadusanka44/best-fit-best-forecast-the-linear-regression-journey-492a36ee5d22"
    },
    {
        id: uuid(),
        title: "What the hell is PKCE? : A Deep Dive",
        summary: "In today’s interconnected world, applications often rely on external services like Facebook or Google for user authentication. This convenience comes with a crucial responsibility ensuring secure authorization. Here’s where OAuth 2.0 shines, a widely adopted framework that lets apps access your data without requiring your actual password."
        , time: "4 min read",
        img: pkce,
        link: "https://medium.com/@nadeeshamadusanka44/what-the-hell-is-pkce-a-deep-dive-9e8a7983d74f"
    },
    {
        id: uuid(),
        title: "Git Made Easy: From Chaos to Clarity",
        summary: "In the ever-evolving world of project development, Git empowers you to keep track of all the modifications made to your project files. Means you can rewind the clock and revert to previous versions if needed. Git also allows you to branch out and experiment."
        , time: "6 min read",
        img: git,
        link: "https://medium.com/@nadeeshamadusanka44/git-made-easy-from-chaos-to-clarity-f3d478119ebe"
    },
    {
        id: uuid(),
        title: "Behind the Web: A Deep Dive",
        summary: "The internet has revolutionized the way we access and share information. It’s become an indispensable part of our lives, transforming how we work, learn, communicate, and entertain ourselves. Imagine a world without instant access to knowledge, the ability to connect with people across the globe, or the convenience of online shopping."
        , time: "8 min read",
        img: webworks,
        link: "https://medium.com/@nadeeshamadusanka44/behind-the-web-a-deep-dive-1d96787e44de"
    },
    {
        id: uuid(),
        title: "Beyond the Login Screen: How Servers Store Your Passwords",
        summary: "In today’s digital world, our passwords are the keys to our online, digital lives. But how do servers actually store these passwords behind the scenes? Unfortunately, not all methods are created equal. A data breach can expose your credentials if they’re not secured properly, putting your accounts at risk. Let’s delve into the world of password storage and explore the best practices to keep your information safe."
        , time: "6 min read",
        img: behindloginscreen,
        link: "https://medium.com/@nadeeshamadusanka44/beyond-the-login-screen-how-servers-store-your-passwords-7cdb58b22836"
    },
    {
        id: uuid(),
        title: "The Power of Cryptography: Protecting Your Data in the Digital Age",
        summary: "In my fifth semester I had a module called “Computer Security” and those concepts were so interesting that leads me to write this article, Here I’m talking like a single drop from the ocean of Computer/Cyber security. So, let me begin. Cryptography, the art of securing information, is the basis of modern cybersecurity. It empowers us to safeguard sensitive data, ensuring confidentiality and integrity even in the face of potential breaches. So, this article dives into the fascinating world of cryptography, exploring its core concepts, applications, and some advanced technical aspects I hope you might find it interest."
        , time: "5 min read",
        img: cryptography,
        link: "https://medium.com/@nadeeshamadusanka44/the-power-of-cryptography-protecting-your-data-in-the-digital-age-c15d195cf1f3"
    },
    {
        id: uuid(),
        title: "Supercharge React Forms : Building Elegant Forms with Formik and Yup",
        summary: "During my internship, I had to work with a react-native application and, I’ve spent hours wrestling with the complexities of form handling. From managing form state to implementing robust validation, building user-friendly forms often felt like a complex task. But there’s a light at the end of the tunnel. Formik and Yup joined to the chat, two powerful libraries that have transformed my approach to building React forms. These tools work in beautiful harmony, streamlining form development and validation."
        , time: "4 min read",
        img: formikandyup,
        link: "https://medium.com/@nadeeshamadusanka44/supercharge-react-forms-building-elegant-forms-with-formik-and-yup-87ec7f2ea2f5"
    },
    {
        id: uuid(),
        title: "The Art of Hidden Messages: Image Steganography",
        summary: "Steganography, derived from the Greek words for “covered writing,” is the age-old practice of concealing messages within ordinary, non-secret objects. In the digital age, this technique has evolved into text steganography, image steganography, video steganography, audio steganography and network steganography."
        , time: "4 min read",
        img: steganography,
        link: "https://medium.com/@nadeeshamadusanka44/the-art-of-hidden-messages-image-steganography-940e13dddd09"
    },
    {
        id: uuid(),
        title: "Game On, Life On: How Video Games Can Level Up Your Life",
        summary: "The world of gaming, holds an unexpected power. The ability to teach valuable life lessons. Beyond the thrilling adventures and competitive challenges, video games offer a unique training ground for developing essential skills that translate seamlessly into our everyday lives. So, put down the controller for a moment, and let’s explore how gaming can become your unexpected life coach."
        , time: "3 min read",
        img: gaming,
        link: "https://medium.com/@nadeeshamadusanka44/is-gaming-related-to-life-4b85765c320e"
    },
]