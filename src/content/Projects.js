import { v4 as uuid } from "uuid";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "@/imports";

export const dataProject = [
  {
    id: uuid(),
    title: "Final Year Project (Ongoing)",
    summary:
      "Focused on enhancing model explainability for predicting valence from fMRI data, with the implementation of Graph Neural Networks (GNN) for improved model performance and interpretation.",
    github: "",
    type: "University Project",
    img: project1,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "Gym Membership Management System",
    summary:
      "Membership Management System for gyms. It lets admins manage operations while customers can track attendance, purchase, and pay for memberships. The system also features fingerprint-based check-ins for a smooth and secure experience.",
    link: "/",
    github: "",
    type: "Company Project",
    img: project1,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "Shopify Store and App",
    summary:
      "Building a Store, offering both new and second-hand clothes. Users can buy new items or sell their used clothes, which are reviewed by admins before being listed for resale.",
    link: "/",
    github: "",
    type: "Company Project",
    img: project1,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "Fitsmiles - Mobile App / Fitbit Watch App",
    summary:
      "Innovative app, Motivating physical activity by rewarding users with coins for walking in designated areas. These coins can be redeemed for purchases within partner malls.",
    link: "https://fitsmiles.com/",
    github: "",
    type: "Internship Project",
    img: project1,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "Train Booking System",
    summary:
      "An online platform for purchasing train tickets and checking schedules effortlessly.",
    link: "http://travelgo.ecodeit.com:13000/",
    github: "https://github.com/nadeeshaMadusanka99/TravelGo-Frontend",
    type: "University Semester 5 Group Project",
    img: project1,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "CarHub Web Application",
    summary:
      "CarHub Car Showcase is a sleek web app for exploring a wide range of car models. Discover detailed info, high-quality images, and key features of your favorite cars in one place.",
    link: "/",
    github: "https://github.com/nadeeshaMadusanka99/carHub_showcase",
    type: "Featured Project",
    img: project1,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "Tindog Website",
    summary:
      "A user-friendly website for dog owners to find ideal dog partners for their furry friends.",
    link: "https://tindogweb44.netlify.app/",
    github: "https://github.com/nadeeshaMadusanka99/TinDog-App",
    type: "Website",
    img: project2,
    styles: "col-span-12 ",
  },
  {
    id: uuid(),
    title: "Movie Master Website",
    summary:
      "User-friendly movie discovery platform that helps movie enthusiasts find films based on their favorite titles.",
    link: "https://movie-master-44.netlify.app/",
    github: "https://github.com/nadeeshaMadusanka99/movie-master-react",
    type: "Website",
    img: project3,
    styles: "col-span-12 ",
  },
  {
    id: uuid(),
    title: "OpenAI Article Summerizer",
    summary:
      "A web application powered by OpenAI to summarize articles from provided URLs of articles. Easily digest long articles and access concise summaries for efficient reading.",
    link: "https://summarize-articles-ai.netlify.app/",
    github: "https://github.com/nadeeshaMadusanka99/summarize-articles-openAI",
    type: "Featured Project",
    img: project4,
    styles: "col-span-12",
  },
  {
    id: uuid(),
    title: "Bookstore Web Application",
    summary:
      "A full-stack MERN (MongoDB, Express, React, Node.js) application for managing your virtual bookshelf. Add, update, delete, and explore book details with ease.",
    link: "/",
    github: "https://github.com/nadeeshaMadusanka99/MERN-bookstore-app",
    type: "Website Template",
    img: project5,
    styles: "col-span-12 ",

  },
  {
    id: uuid(),
    title: "Email-Client",
    summary:
      "Java-based command-line application for managing recipients, sending emails, and automating birthday wishes. Easily add new recipients, compose emails, and track sent messages.",
    link: "/",
    github: "https://github.com/nadeeshaMadusanka99/email-client",
    type: "CLI Application",
    img: project6,
    styles: "col-span-12",
  },
];