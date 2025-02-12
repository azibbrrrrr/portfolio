import Link from 'next/link'

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
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-1'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          {/* Wrap the entire card content with Link */}
          <Link
            href={`/projects/${project.slug}`}
            className='group block rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl dark:bg-background dark:hover:bg-background/80'
          >
            {/* Flex container to display icon and text in a row */}
            <div className='flex items-center'>
              {/* Left Icon */}
              <div className='from-primary-500 relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r to-blue-500'>
                {/* Use an icon or image, you can replace this with any project-specific icon */}
                <span className='text-3xl font-semibold text-white'>
                  {project.icon || '📂'} {/* Placeholder icon */}
                </span>
              </div>

              {/* Right Text Content */}
              <div className='ml-6 flex flex-col'>
                {/* Title with Tools next to it */}
                <div className='flex items-center'>
                  <h2 className='text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary dark:text-white'>
                    {project.title}
                  </h2>

                  {/* Tools List - Positioned to the right of the title */}
                  {project.tools && project.tools.length > 0 && (
                    <div className='ml-4 flex flex-wrap gap-2'>
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
        </li>
      ))}
    </ul>
  )
}
