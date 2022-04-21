import Avatar from '../img/avatar.png'

export default function Start () {
  return (

    <section id='home-section' className='page-section'>
      <div className='page-section-inner'>
        <div id='hero-top-container' className='flex-container align-center justify-center direction-column'>
          <div className='features-view'>
            <div className='feature' id='feature-1'>
              <img src={Avatar} alt='Avatar' className='avatar' />
              <div className='feature-info animated animatedFadeInUp fadeInUp'>
                <h1 className='title'>Hi, I'm Tristan</h1>
                <p className='title-description'>I love learning new technologies and difficult challenges. My stack is usually JavaScript and Python, although I also work with hypervisors like VMware and platforms like K8s. I also love cybersecurity and try to keep learning constantly.</p>
                <div id='social-icons' className='flex-container justify-center wrap'>
                  <a rel='noreferrer noopener' target='_blank' href='https://twitter.com/treszu/' className='social-icon twitter'>
                    <svg className='social-icon-inner' width='32' height='32' viewBox='0 0 20 16' aria-hidden='true'>
                      <g fill='none' fill-rule='evenodd'>
                        <path className='foreground-26ym5y da-foreground' fill='currentColor' d='M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z' />
                        <rect width='32' height='32' />
                      </g>
                    </svg>
                  </a>
                  <a rel='noreferrer noopener' target='_blank' href='https://github.com/fordus/' className='social-icon github'>
                    <svg className='social-icon-inner' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='26' height='26'>
                      <path fill='currentColor' fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
                    </svg>
                  </a>
                  <a rel='noreferrer noopener' target='_blank' href='https://app.hackthebox.com/users/869499' className='social-icon htb'>
                    <svg className='social-icon-inner' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M11.996 0a1.119 1.119 0 0 0-.057.003a.9.9 0 0 0-.236.05a.907.907 0 0 0-.165.079L1.936 5.675a.889.889 0 0 0-.445.77v11.111a.889.889 0 0 0 .47.784l9.598 5.541l.054.029v.002a.857.857 0 0 0 .083.035l.012.004c.028.01.056.018.085.024c.01.001.011.003.016.004a.93.93 0 0 0 .296.015a.683.683 0 0 0 .086-.015c.01 0 .011-.002.016-.004a.94.94 0 0 0 .085-.024l.012-.004a.882.882 0 0 0 .083-.035v-.002a1.086 1.086 0 0 0 .054-.029l9.599-5.541a.889.889 0 0 0 .469-.784V6.48l-.001-.026v-.008a.889.889 0 0 0-.312-.676l-.029-.024c0-.002-.01-.005-.01-.007a.899.899 0 0 0-.107-.07L12.453.127A.887.887 0 0 0 11.99 0zm.01 2.253c.072 0 .144.019.209.056l6.537 3.774a.418.418 0 0 1 0 .724l-6.537 3.774a.418.418 0 0 1-.418 0L5.26 6.807a.418.418 0 0 1 0-.724l6.537-3.774a.42.42 0 0 1 .209-.056zm-8.08 6.458a.414.414 0 0 1 .215.057l6.524 3.766a.417.417 0 0 1 .208.361v7.533a.417.417 0 0 1-.626.361l-6.523-3.766a.417.417 0 0 1-.209-.362V9.13c0-.241.196-.414.41-.418zm16.16 0c.215.004.41.177.41.418v7.532a.42.42 0 0 1-.208.362l-6.524 3.766a.417.417 0 0 1-.626-.361v-7.533c0-.149.08-.286.209-.36l6.523-3.767a.415.415 0 0 1 .216-.057z' />
                    </svg>
                  </a>
                  <a rel='noreferrer noopener' target='_blank' href='https://www.linkedin.com/in/tri' className='social-icon linkedin'>
                    <svg className='social-icon-inner' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 50 512 512'>
                      <path
                        fill='currentColor' d='M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
