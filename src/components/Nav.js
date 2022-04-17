
export default function Nav () {
  return (
    <header id='navbar' className='page-section flex-container align-center'>
      <div className='page-section-inner'>
        <a href='https://tres.red' type='submit' className='btn'>
          <svg className='btn-icon logo-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 101.57' width='40' height='40'>
            <path fill-rule='evenodd' d='M47.53,61.26l.15.15a8.91,8.91,0,0,1-.18,12.46s-.11.13-.16.16a8.91,8.91,0,0,1-12.42-.1c-9.66-8.86-23.59-20-32.1-29.25a8.92,8.92,0,0,1,.11-13.12c5.41-6.71,24.44-22.15,32-29A8.93,8.93,0,0,1,49.12,13a1.66,1.66,0,0,1-.44.56l-27,24.78c4.32,4.19,8.09,7.31,11.86,10.43a172.63,172.63,0,0,1,14,12.48Zm27.82,0-.15.15a8.91,8.91,0,0,0,.18,12.46s.11.13.16.16A8.91,8.91,0,0,0,88,73.93c9.66-8.86,23.59-20,32.1-29.25A8.92,8.92,0,0,0,120,31.56c-5.41-6.71-24.44-22.15-32-29A8.93,8.93,0,0,0,73.76,13a1.77,1.77,0,0,0,.43.56l27,24.78c-4.32,4.19-8.1,7.31-11.86,10.43a172.63,172.63,0,0,0-14,12.48Z' />
          </svg>
          <span className='logo-text'>Tres dot Red</span>
        </a>
        <nav id='navbar-nav-items' className='flex-container align-center' data-toggle='affix'>
          <a className='nav-item' href='/'>About</a>
          <a className='nav-item' href='/'>Projects</a>
          <a className='nav-item' href='/'>Blog</a>
          <a href='https://github.com/fordus' type='submit' className='btn btn-secondary' target='_blank' rel='noopener noreferrer'>
            <svg className='btn-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='20' height='20'>
              <path fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
            </svg>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
