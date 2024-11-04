import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, Github, Linkedin, ExternalLinkIcon } from 'lucide-react';
import wavingHand from "./assets/waving-hand-default.svg"
const TypeWrite = ({ text }) => {
  return (
    <motion.h1
      className='text-4xl font-bold text-white mb-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text.split('').map((char, index) => {
        return (<motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: 'easeOut'
          }}
          className='text-while'
        >
          {char}
        </motion.span>)
      })}
    </motion.h1>
  )
}


export default function Portfolio() {
  const cards = [
    {
      title: 'Introduction',
      content: (
        <div>
          <h2 className="text-4xl font-bold mb-2">I am B Md Mohassin Hussain</h2>
          <p className="mb-2 text-3xl"></p>
          <a href="mailto:mohassinhussain22@gmail.com" className="mb-2 mt-4 text-3xl text-yellow-700 underline">
            mohassinhussain22@gmail.com
          </a> <br /> <br />
          <a href="tel:+91 9676940969" className="mb-2 text-3xl text-green-600 underline">
            +91 9676940969
          </a> <br />
          <p className="text-lg">Hyderabad, Telangana, India</p>
          <p className="mt-5 text-lg">
            Welcome to my portfolio! I am an enthusiast full stack developer and also pretty professional in problem solving and critical thinking.
          </p>
        </div>
      )
    },
    {
      title: 'Education',
      content: (
        <div>
          <h3 className="font-bold text-3xl mb-2">CMR College of Engineering & Technology</h3>
          <p className="text-lg">Hyderabad, India</p>
          <p className="text-lg">B.Tech in AI & ML</p>
          <p className="text-lg">October 2022 - September 2026</p>
          <p className="text-lg">CGPA: 8.93</p>
        </div>
      )
    },
    
    {
      title: 'Skills',
      content: (
        <div>
          <p className="text-lg text-3xl"><strong>Programming Languages:</strong>  Java, C++, Python, C</p>
          <p className="text-lg text-3xl"><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Redux toolkit, React Native</p>
          <p className="text-lg text-3xl"><strong>Backend and Databases:</strong> Node.js, Express.js, MongoDB, Firebase</p>
          <p className="text-lg text-3xl"><strong>DevOps & Related:</strong> GitHub, Vercel, AWS, Google Analytics</p>
          <p className="text-lg text-3xl"><strong>Intermediate:</strong> Data Structures & Algorithms, ML Algorithms, Pandas, Figma, UI, Docker, PostgreSQL, MySQL</p>
          <p className="text-lg text-3xl"><strong>Tools:</strong> VS Code, Git</p>
        </div>
      ),
    },

    {
      title: 'Project 1',
      content: (
        <div>
          <h3 className="font-bold text-3xl mb-2">Archivenvo</h3>
          <p className="mb-4 text-lg">React.js, MongoDB, Node.js, Express.js</p>
          <p className="text-lg">
            Developed a file sharing platform using React.js for robust state management on the frontend. The backend is built with Node.js and Express.js, utilizing Multer to handle multipart data. Integrated with MongoDB to store and manage filenames and access codes, ensuring efficient file sharing and retrieval.
          </p>
          <a href="https://archivenvo.vercel.app/" className="text-blue-500 hover:text-blue-600 mt-2 inline-flex items-center">
            View Project <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      )
    },
    {
      title: 'Project 2',
      content: (
        <div>
          <h3 className="font-bold text-3xl mb-2">Fake Logo detection</h3>
          <p className="mb-4 text-lg">Python, CNN (Algorithm)</p>
          <p className="text-lg">
            This project uses a CNN-based algorithm to detect fake logos by comparing them to original ones. The logo image is divided into cells, with each cell indexed and compared against the original logo. If all index values match, the logo is considered authentic; otherwise, it is flagged as fake. A GUI is implemented using Python's Tkinter library.
          </p>
          <a href="https://github.com/MohassinHussain/Fake_Logo_Detection_Team-13" className="text-blue-500 hover:text-blue-600 mt-2 inline-flex items-center">
            View Project <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      )
    },
    {
      title: 'Project 3',
      content: (
        <div>
          <h3 className="font-bold text-3xl mb-2">bFinder</h3>
          <p className="mb-4 text-lg">React Native, Firebase, Clerk Auth</p>
          <p className="text-lg">
            A mobile app built using React Native (expo) for frontend and integrated with Firebase for real-time data storage and retrieval. As a full-time database, it's connected with PostgreSQL for flexibility. Used Clerk for authentication and their analytics.
          </p>
          <a href="https://github.com/MohassinHussain/bFinder" className="text-blue-500 hover:text-blue-600 mt-2 inline-flex items-center">
            View Project <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      )
    },
    {
      title: 'Project 4',
      content: (
        <div>
          <h3 className="font-bold text-3xl mb-2">inApp-share (idea prototype)</h3>
          <p className="mb-4 text-lg">React.js, Node.js, Express.js, MongoDB, Firebase Auth</p>
          <p className="text-lg">
            Developed inApp-share (iAS), a React.js web app with Tailwind for responsive UI, enabling in-app video sharing. Integrated Firebase Authentication for Gmail login and MongoDB for video storage. Utilized AI tools for streamlined design and user experience optimization.
          </p>
          <a href="https://github.com/MohassinHussain/inApp-share" className="text-blue-500 hover:text-blue-600 mt-2 inline-flex items-center">
            View Project <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      )
    },
    {
      title: 'Project 5',
      content: (
        <div>
          <h3 className="font-bold text-3xl mb-2">Globe Hoppin</h3>
          <p className="mb-4 text-lg">React.js, Tailwind</p>
          <p className="text-lg">Contributed to the betterment of the website.</p>
          <a href="https://github.com/MohassinHussain/GlobeHoppin/" className="text-blue-500 hover:text-blue-600 mt-2 inline-flex items-center text-center">
            View Project <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      )
    },
    {
      title: 'Links',
      content: (
        <div className="flex justify-center h-[20rem] items-center flex-col space-y-4 mt-4">
          <a href="https://linkedin.com/in/mohassinhussain" className="text-blue-700 hover:text-blue-800 flex items-center" aria-label="LinkedIn">
            <Linkedin size={32} className="mr-2" /> LinkedIn
          </a>
          <a href="https://github.com/MohassinHussain" className="text-gray-800 hover:text-gray-900 flex items-center" aria-label="GitHub">
            <Github size={32} className="mr-2" /> GitHub
          </a>
          {/* <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center" aria-label="Portfolio">
            <ExternalLinkIcon size={32} className="mr-2" /> Portfolio
          </a> */}
          <a href="https://leetcode.com/u/22h51a7306/" className="text-orange-500 hover:text-orange-600 flex items-center" aria-label="LeetCode">
            <ExternalLinkIcon size={32} className="mr-2" /> LeetCode
          </a>
        </div>
      )
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      nextCard();
    } else if (event.key === 'ArrowLeft') {
      prevCard();
    } else if (event.key === 'ArrowUp') {
      nextCard();
    } else if (event.key === 'ArrowDown') {
      prevCard();
    }
  };

  useEffect(() => {
    // Add event listener for keydown events
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-purple-500 to-black-200 flex flex-col items-center justify-center overflow-hidden p-4">
      {/* <h1 className="text-4xl font-bold text-white mb-8">B Md Mohassin Hussain</h1>  */}
      <div className="flex items-center mb-10 gap-2">
        <img className="-mt-8 w-12 h-12" src={wavingHand}  />
        <TypeWrite text="I am B Md Mohassin Hussain" />
      </div>

      <div className="relative w-full max-w-2xl h-[36rem]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            initial={{ x: 300, y: 300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: -300, y: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div>
              <h2 className="text-4xl font-semibold mb-10 underline">{cards[currentIndex].title}</h2>
              <div className="text-black overflow-y-auto max-h-[28rem] text-lg">
                {cards[currentIndex].content}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevCard}
                className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors text-white"
                aria-label="Previous card"
              >
                <ChevronLeftIcon size={24} />
              </button>
              <div className="flex gap-4">
                <span className="text-black font-semibold">
                  ----- {cards[(currentIndex - 1 + cards.length) % cards.length].title}
                </span>
                |
                <span className="text-black font-semibold">
                  {cards[(currentIndex + 1) % cards.length].title} -----
                </span>
              </div>
              <button
                onClick={nextCard}
                className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors text-white"
                aria-label="Next card"
              >
                <ChevronRightIcon size={24} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg"
            style={{
              transform: `translateY(${(i + 1) * 20}px)`,
              zIndex: -i - 1,
              opacity: 1 - (i + 1) * 0.2,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
