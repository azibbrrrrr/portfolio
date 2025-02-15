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
    <ul className='grid grid-cols-1 gap-5 sm:grid-cols-1'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          {/* Wrap the entire card content with Link */}
          <div className='rounded-lg bg-[#EDF7FA] p-6 transition-all duration-300 hover:scale-105 dark:bg-[#22272F] dark:hover:bg-[#22272F]/80'>
            <Link href={`/projects/${project.slug}`} className='group block'>
              {/* Flex container to display image and text in a row */}
              <div className='flex flex-col items-start sm:flex-row'>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    width={160}
                    height={152}
                    className='h-38 mb-3 w-full rounded-md object-cover sm:mb-0 sm:w-40'
                  />
                )}

                {/* Right Text Content */}
                <div className='ml-4 flex flex-col'>
                  {/* Title with Tools next to it */}
                  <div className='flex flex-col sm:flex-row sm:items-center'>
                    <h2 className='text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary dark:text-white'>
                      {project.title}
                    </h2>

                    {/* Tools List - Positioned below the title on mobile, to the right on larger screens */}
                    {project.tools && project.tools.length > 0 && (
                      <div className='mt-2 flex flex-wrap gap-2 sm:ml-4 sm:mt-0'>
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
                  <p className='mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white'>
                    {project.summary}
                  </p>

                  {/* Optional Published Date */}
                  {/* <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {formatDate(project.publishedAt ?? '')}
              </p> */}
                </div>
              </div>
            </Link>
          </div>
          {/* Gray line to separate each project */}
          {/* <hr className='mb-4 mt-4 border-gray-300 dark:border-gray-700' /> */}
        </li>
      ))}
    </ul>
  )
}
