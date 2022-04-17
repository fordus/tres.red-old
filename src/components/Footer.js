
export default function Footer () {
  return (
    <footer id='section-footer' className='page-section'>
      <div className='page-section-inner'>
        <section id='footer-top' className='flex-container hide-mobile'>
          <div className='footer-column'>
            <h3 className='footer-column-header'>Contact</h3>
            <a rel='noreferrer noopener' target='_blank' href='/' className='footer-column-item'>
              <span>Email</span>
            </a>
          </div>
          <div className='footer-column'>
            <h3 className='footer-column-header'>Social</h3>
            <a rel='noreferrer noopener' target='_blank' href='https://twitter.com/treszu' className='footer-column-item'>
              <span>Twitter</span>
            </a>
            <a rel='noreferrer noopener' target='_blank' href='https://github.com/fordus' className='footer-column-item'>
              <span>GitHub</span>
            </a>
            <a rel='noreferrer noopener' target='_blank' href='https://github.com/fordus' className='footer-column-item'>
              <span>YouTube</span>
            </a>
          </div>
          <div className='footer-column'>
            <h3 className='footer-column-header'>Donate ♥</h3>
            <a href='/' className='footer-column-item'>Patreon</a>
            <a href='/' className='footer-column-item'>Bitcoin</a>
            <a href='/' className='footer-column-item'>Ethereum</a>
          </div>
        </section>
        <section id='footer-bottom' className='flex-container wrap align-center justify-between'>
          <div className='hide-desktop flex-container wrap' id='footer-privacy-container'>
            <div className='footer-privacy text-center'>
              <a href='/' className='footer-privacy-item' target='_blank' rel='noopener noreferrer'>Email</a>
              <a href='/' className='footer-privacy-item' target='_blank' rel='noopener noreferrer'>Donate ♥</a>
              <a href='/' className='footer-privacy-item' target='_blank' rel='noopener noreferrer'>GitHub</a>
              <a href='/' className='footer-privacy-item' target='_blank' rel='noopener noreferrer'>Twitter</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
