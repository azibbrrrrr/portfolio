import Link from 'next/link'
import Image from 'next/image'

import { ProjectMetadata } from '@/lib/projects'

const toolColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-teal-500',
  'bg-orange-500'
  // Add more colors as needed
]

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          {/* Wrap the entire card content with Link */}
          <div className='rounded-lg bg-[#EDF7FA] p-6 transition-all duration-300 dark:bg-[#22272F] dark:hover:bg-[#22272F]/80'>
            {/* Flex container to display image and text in a row */}
            <div className='flex h-full flex-col items-start'>
              <div></div>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  width={160}
                  height={152}
                  className='h-38 mb-3 w-full rounded-md object-cover'
                />
              )}

              {/* Right Text Content */}
              <div className='flex flex-grow flex-col'>
                {/* Title with Tools next to it */}
                <div className='flex flex-col items-start'>
                  <h2 className='text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary dark:text-white'>
                    {project.title}
                  </h2>
                  <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                    {project.type}
                  </p>

                  {/* Tools List - Positioned below the title on mobile, to the right on larger screens */}
                  {project.tools && project.tools.length > 0 && (
                    <div className='mt-0 flex flex-wrap gap-2 md:mt-2'>
                      {project.tools.map((tool, index) => (
                        <span
                          key={tool}
                          className={`${toolColors[index % toolColors.length]} rounded-md px-2 py-1 text-xs text-white`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className='mt-2 line-clamp-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white'>
                  {project.summary}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className='flex items-center text-sm font-medium text-blue-500 hover:underline'
                >
                  Learn More
                </Link>

                {/* Link to github, demo and colab notebook */}
                <div className='mt-2 flex space-x-2'>
                  {project.github && (
                    <Link
                      href={project.github}
                      className='inline-flex items-center rounded-md bg-gray-800 px-2 py-2 text-xs font-thin text-white transition-all duration-300 hover:bg-gray-900 dark:bg-orange-400'
                      target='\_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        className='mr-2 h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.217.694.825.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z' />
                      </svg>
                      GitHub
                    </Link>
                  )}

                  {project.demo && (
                    <Link
                      href={project.demo}
                      className='inline-flex items-center rounded-md bg-green-600 px-2 py-2 text-xs font-thin text-white transition-all duration-300 hover:bg-green-700'
                      target='\_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        className='mr-2 h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                      Demo
                    </Link>
                  )}

                  {project.colab && (
                    <Link
                      href={project.colab}
                      className='inline-flex items-center rounded-md bg-yellow-500 px-2 py-2 text-xs font-thin text-white transition-all duration-300 hover:bg-yellow-600'
                      target='\_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path
                          fill='currentColor'
                          d='M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v8l-2.5-2.25L8 12V4H6v16h12z'
                        ></path>
                      </svg>
                      Colab
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
