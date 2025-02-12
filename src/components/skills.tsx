import React, { JSX } from 'react'
import { FaPython, FaJava, FaJsSquare, FaPhp, FaNodeJs } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiSpring,
  SiFirebase,
  SiMongodb,
  SiMysql
} from 'react-icons/si'
import { SiTensorflow, SiKeras, SiPytorch, SiHuggingface } from 'react-icons/si'
import {
  SiGit,
  SiFigma,
  SiUnity,
  SiAdobeillustrator,
  SiAdobephotoshop
} from 'react-icons/si'
import { BsCodeSquare } from 'react-icons/bs' // Fallback generic icon for missing items

interface SkillCategory {
  category: string
  items: { name: string; icon: JSX.Element }[] // We can ignore the 'name' here as we're only using icons
}

const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'C', icon: <BsCodeSquare /> },
      { name: 'PHP', icon: <FaPhp /> }
    ]
  },
  {
    category: 'Web Development',
    items: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Node.js', icon: <FaNodeJs /> }, // Use a fallback icon for Node.js
      { name: 'Spring MVC', icon: <SiSpring /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> }
    ]
  },
  {
    category: 'AI & Machine Learning',
    items: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Hugging Face', icon: <SiHuggingface /> },
      { name: 'Microsoft Azure AI Tools', icon: <BsCodeSquare /> } // Icon for Azure
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Unity', icon: <SiUnity /> },
      { name: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop /> },
      { name: 'Power BI', icon: <BsCodeSquare /> } // Use a fallback icon for Power BI
    ]
  }
]

const Skills: React.FC = () => {
  return (
    <section className='pb-24'>
      <h2 className='title mb-6 text-center text-3xl font-semibold text-gray-900 dark:text-white'>
        My Skills
      </h2>

      <div className='space-y-8'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'
          >
            <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
              {skill.category}
            </h3>
            <div className='grid grid-cols-4 gap-8 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className='group flex flex-col items-center justify-center text-gray-700 dark:text-gray-300'
                >
                  <span className='text-6xl transition-all duration-300 group-hover:text-blue-500'>
                    {item.icon}
                  </span>
                  <span className='mt-2 text-sm text-gray-800 dark:text-gray-400'>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
