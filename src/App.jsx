import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import All from "./components/All";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";

const App = () => {
  const data = [
    {
      image:
        "/image/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.png",
      head: "Full Stack Development",
      title: "Top 6 Backend Frameworks That You Should Know in 2024",
      content:
        "If you are looking to ace the field of backend development, you must be able to create websites that are more intuitive and especially should stand out from all the other websites there.",
      time: "Last updated a few mins ago",
      link: "https://www.guvi.in/blog/top-backend-frameworks/",
    },
    {
      image: "/image/Feature-image-Backend-Developer-Salary-in-India-USA.png",
      head: "Full Stack Development",
      title: "Backend Developer Salary in India & USA [2024]",
      content:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious about how much backend developers make, especially in places like India and the USA in 2024. ",
      time: "Last updated a few hours ago",
      link: "https://www.guvi.in/blog/backend-developer-salary-in-india-usa/",
    },
    {
      image:
        "/image/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.png",
      head: "Full Stack Development",
      title: "Top Full Stack Development Trends for 2024: What to Expect",
      content:
        " In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full stack which involves creating software systems or web application that encompass both.",
      time: "Last updated 1 day ago",
      link: "https://www.guvi.in/blog/full-stack-development-trends/",
    },
    {
      image:
        "/image/Feature-image-Difference-between-Data-Science-and-Data-Engineering.png",
      head: "Data Science",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      content:
        "India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. ",
      time: "Last updated 1 day ago",
      link: "https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/",
    },
    {
      image: "/image/Future-of-Data-Science.png",
      head: "Data Science",
      title: "Future of Data Science and How You Can Thrive With It",
      content:
        "Data Science has emerged as a revolutionary field in the technology world, transforming the way computers learn and helping organizations make data-driven decisions, the demand for skilled Data Scientists has skyrocketed.",
      time: "Last updated 2 days ago",
      link: "https://www.guvi.in/blog/the-future-of-data-science/",
    },
    {
      image: "/image/Data-Science-project-showcase.png",
      head: "Data Science",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      content:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists continues to soar, it has become crucial for aspiring professionals to stand out from the crowd by showcasing their skills",
      time: "Last updated 3 days ago",
      link: "https://www.guvi.in/blog/data-science-projects/",
    },
    {
      image: "/image/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.png",
      head: "Cyber Security",
      title: "What Is Hacking? Types of Hacking & More",
      content:
        "Have you ever wondered what hacking is all about? It’s a big deal and in today’s tech-heavy world,and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the types of hacking that existed. ",
      time: "Last updated 2 days ago",
      link: "https://www.guvi.in/blog/what-is-hacking/",
    },
    {
      image:
        "/image/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      head: "Cyber Security",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      content:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe. Is there a difference between cybersecurity and ethical hacking, if yes then what is the difference? Let’s check it out",
      time: "Last updated 3 days ago",
      link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
    },
    {
      image:
        "/image/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      head: "Cyber Security",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      content:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft,unauthorized access. With the advent of technology and the increasing interconnectedness of organizational systems and networks.",
      time: "Last updated 5 days ago",
      link: "https://www.guvi.in/blog/types-of-cybersecurity/",
    },
    {
      image:
        "/image/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.png",
      head: "Career",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      content:
        "If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world!",
      time: "Last updated 3 days ago",
      link: "https://www.guvi.in/blog/top-technologies-to-learn-now/",
    },
    {
      image:
        "/image/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.png",
      head: "Career",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      content:
        "The world is moving towards automating the testing in order to increase work efficiency. Those who control the automation process will have a long career journey. All you need to have is a professional automation test engineer resume.",
      time: "Last updated 7 days ago",
      link: "https://www.guvi.in/blog/automation-test-engineer-resume-tips/",
    },
    {
      image: "/image/javascript-animated-image.png",
      head: "Career",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      content:
        "So many doubts, right? Calm down! All of your doubts will be answered here. We all get fascinated by those buttons, forms, menus, and pages on our screen when we look for any general query on the internet. Those are created by none other than front-end developers.",
      time: "Last updated 10 days ago",
      link: "https://www.guvi.in/blog/javascript-frontend-roadmap/",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<FullStack data={data} />} />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route
            path="/cybersecurity"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
