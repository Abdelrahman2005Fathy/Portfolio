export const navItems = [
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ocean App",
    des: " This project is a responsive and modern design, leveraging Next.js for performance optimization and Tailwind CSS for flexible styling. It's my first project using Next.js.",
    img: "/Ocean.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://ocean-ten.vercel.app/",
  },
  {
    id: 6,
    title: "Weather App",
    des: " This weather app provides real-time weather updates and forecasts for cities worldwide. Built with Next.js, TypeScript, and Tailwind CSS, the app features an intuitive interface allowing users to select cities and view weather details such as temperature, humidity, wind speed, and precipitation. Using the OpenWeatherMap API...",
    img: "/weather app.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://weather-app-khaki-nine-31.vercel.app/",
  },
  {
    id: 2,
    title: "Around The World",
    des: " Around The World app provides real-information countries updates. Built with React and Tailwind CSS...",
    img: "/Countries.png",
    iconLists: ["tail.svg", "/js.png", "/re.svg"],
    link: "https://around-the-world-mauve-nine.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Personal Website",
  //   des: " This Personal Website Built with Html5 and Css3, the app features an intuitive interface allowing users to select...",
  //   img: "/personal-web.png",
  //   iconLists: ["/html.png", "/css-3.png"],

  //   link: "https://personal2025website.netlify.app/",
  // },
  {
    id: 5,
    title: "Kanban Board App",
    des: "  Kanban Board App is a task management tool built with React and Tailwind CSS to streamline workflows and boost productivity. It features a sleek, responsive design with drag-and-drop functionality for seamless task organization. Perfect for teams and individuals looking to manage their projects efficiently.",
    img: "/Kanban Board.png",
    iconLists: ["/re.svg", "/js.png", "/tail.svg"],
    link: "https://kanban-board-app-eight-rosy.vercel.app/",
  },
  {
    id: 4,
    title: " Github Search Repo",
    des: " This project is a web app that enables users to search for GitHub users or organizations via the GitHub API. It dynamically displays results in card format, showing the user's avatar, username, and a link to their profile. Developed with TypeScript, the app ensures a clean, maintainable codebase and provides a user-friendly experience with responsive design and effective error handling.",
    img: "/Repo Finder.png",
    iconLists: ["/html.png", "/ts.svg", "css-3.png"],
    link: "https://Ahmed2005fathy.github.io/Github-Search-Repo/",
  },
];

export const testimonials = [
  {
      quote:
        "Working with Ahmed was an incredible experience. His attention to detail and creative approach brought our ideas to life seamlessly. Ahmed not only delivered exceptional results but also exceeded our expectations. Highly recommended for anyone looking to make their website truly impactful.",
      name: "Sarah Thompson",
      title: "CEO of BrightEdge Solutions",
  },

  {
      quote:
        "Ahmed's expertise transformed our online presence. His innovative solutions and commitment to perfection made our project a huge success. From design to development, Ahmed handled every aspect with precision and professionalism. We’re thrilled with the results!",
      name: "James Carter",
      title: "Founder of NextWave Ventures",
    },

    {
      quote:
        "Ahmed was a game-changer for our brand. His ability to understand our needs and translate them into a stunning and functional website was remarkable. His dedication and technical expertise make him a standout developer. We couldn’t have asked for a better partner.",
      name: "Emily Davis",
      title: "Marketing Manager at Horizon Creatives",
    },
    {
      quote:
        "Ahmed brought our vision to life with unparalleled skill and creativity. His strategic approach to web development ensured our site was not only visually appealing but also user-friendly. A true professional who delivers beyond expectations!",
      name: "David Miller",
      title: "CTO of WaveLink Solutions",
  },
  {
      quote:
        "From start to finish, Ahmed demonstrated exceptional dedication and talent. His technical knowledge and design sensibilities perfectly aligned with our goals, resulting in a website that truly reflects our brand. I highly recommend him to anyone seeking excellence in development.",
      name: "Olivia Harris",
      title: "Creative Director at SparkPoint Media",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Web Developer",
    desc: "Member in the development of a almdrasa platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a Desktop app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Abdelrahman2005Fathy/",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdelrahman-fathi-55ab16308/",
  },
];
