import Layout from '../components/layout'
import Grid from '../components/grid'

const items = [
  {
    image: '/static/img/tcfp_logo-green.svg',
    title: 'TC Forest Products',
    disciplines: [ 'Branding', 'Web' ],
    size: 'medium',
    link: 'http://tcforest.ca',
    position: 'bottom'
  }, {
    image: '/static/img/whitecap_tea.jpg',
    title: 'Whitecap Coffee',
    disciplines: [ 'Branding', 'Web', 'Development', 'Collateral' ],
    size: 'wide',
    link: 'http://drinkwhitecap.ca',
    position: 'top'
  }, {
    image: '/static/img/mbhof_thumb.jpg',
    title: 'Manitoba Baseball Hall of Fame',
    disciplines: [ 'Branding', 'Web' ],
    size: 'full',
    link: 'http://mbhof.ca',
    position: 'top'
  }, {
    image: '/static/img/whatevertown.svg',
    title: 'Whatevertown',
    disciplines: [ 'Branding' ],
    size: 'medium',
    position: 'top'
  }, {
    image: '/static/img/tripps_icon.svg',
    title: 'Tripp\'s Tree Care',
    disciplines: [ 'Branding', 'Web', 'Collateral' ],
    size: 'large',
    link: 'http://tripps.ca',
    position: 'bottom'
  }, {
    image: '/static/img/whitecap_sunset.svg',
    title: 'Whitecap Coffee',
    disciplines: [ 'Branding', 'Web', 'Collateral' ],
    size: 'large',
    link: 'http://drinkwhitecap.com',
    position: 'top'
  }, {
    image: '/static/img/lc-dribbble.jpg',
    title: 'Listener\'s Club',
    disciplines: [ 'Branding' ],
    size: 'medium',
    position: 'bottom'
  }, {
    image: '/static/img/rhymeandrhythm_screenshot.png',
    title: 'Rhyme & Rhythm Cinematography',
    disciplines: [ 'Web' ],
    size: 'medium',
    link: 'http://rhymeandrhythm.ca',
    position: 'bottom'
  }, {
    image: '/static/img/thenewsprint_ipads.jpg',
    title: 'The Newsprint',
    disciplines: [ 'Web' ],
    size: 'medium',
    link: 'https://thenewsprint.co',
    position: 'bottom'
  }, {
    image: '/static/img/whitecap_whit3cap.jpg',
    title: 'Whitecap',
    disciplines: [ 'Branding', 'Web', 'Collateral' ],
    size: 'medium',
    position: 'bottom'
  }
]

export default () => (
  <Layout>
    <div className='intro'>
      <p>We're an independent design &amp; development studio focused on finding clear and engaging solutions for companies looking to tell their story.</p>
      <p>Now booking for {getSeason()}.</p>
    </div>
    <h2>Selected Works</h2>
    <Grid
      items={items}
    />
    <style jsx>{`
      .intro {
        padding: 3rem 0 3rem;
        @media screen and (min-width: 600px) {
          max-width: 65%;
        }
      }
    `}</style>
  </Layout>
)

const getSeason = () => {
  let date = new Date()
  let forecast = new Date()
  forecast.setDate(date.getDate() + 90)
  let month = Number(forecast.getMonth())
  let year = forecast.getFullYear()

  if (3 >= month && month <= 5) {
    return 'Spring ' + year
  } else if (6 >= month && month <= 8) {
    return 'Summer ' + year
  } else if (9 >= month && month <= 11) {
    return 'Fall ' + year
  } else {
    return 'Winter ' + year
  }
}
