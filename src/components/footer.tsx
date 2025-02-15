import { JSX, SVGProps } from 'react'

const navigation = [
  {
    name: 'Azib Iqbal',
    href: 'https://www.linkedin.com/in/azib-iqbal-84b9a625a/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  },
  {
    name: 'azibiqbal',
    href: 'https://github.com/azibbrrrrr',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={22}
        height={22}
        viewBox='0 0 24 24'
      >
        <g fill='none'>
          <g clipPath='url(#akarIconsGithubFill0)'>
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12'
              clipRule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='akarIconsGithubFill0'>
              <path fill='#fff' d='M0 0h24v24H0z'></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    )
  },
  {
    name: '+60102144281',
    href: 'tel:+60102144281',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.98.98 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99'
        ></path>
      </svg>
    )
  },
  {
    name: 'azibiqbal01@gmail.com',
    href: 'mailto:azibiqbal01@gmail.com',
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z'
        ></path>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className='py-8' id='footer'>
      <div className='container max-w-screen-lg px-4'>
        <div className='mb-4 grid grid-cols-2 gap-6 border-b pb-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
              className='flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground'
            >
              <item.icon aria-hidden='true' className='h-5 w-5' />
              <span className='text-sm'>{item.name}</span>
            </a>
          ))}
        </div>
        <div className='text-center'>
          <p className='text-xs leading-5 text-muted-foreground'>
            &copy; {new Date().getFullYear()} AZIB IQBAL | ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
