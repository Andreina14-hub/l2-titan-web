import ImageCard from '../../components/image-card'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code
          is licensed
          <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is
          licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  )
}
function HomePage() {
  return (
    <div className='HomePage'>
      <div className='wallpaper'></div>
      <section className='section homeSectionOne'>
        {/* <div className='container'></div> */}
      </section>
      <section className='section homeSectionTwo'>
        <div className='content is-large'>
          <h3 className='title is-3 has-text-centered'>Title 3</h3>
        </div>
        <div class='columns is-multiline is-align-content-center'>
          <div class='column is-one-quarter-desktop is-half-tablet'>
            <div className='card'>
              <div className='card-images'>
                <figure className='image is-3by2'>
        
                </figure>
              </div>
            </div>
          </div>
          <div class='column is-one-quarter-desktop is-half-tablet'>
            <div className='card'>
              <div className='card-images'>
                <figure className='image is-3by2'>
             
                </figure>
              </div>
            </div>
          </div>
          <div class='column is-one-quarter-desktop is-half-tablet'>
            <div className='card'>
              <div className='card-images'>
                <figure className='image is-3by2'>
              
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
