import Layout from '../components/layout'
import Grid from '../components/grid'

const items = [
  {
    image: 'https://cdn2.dropmarkusercontent.com/45267/19cb1fdc5cee3d9b0af123585dace8498ee85fb7eaf665aa8d6129ed0c0d6144/tcfp_logo-green.svg?Expires=1536851579&Signature=YB19q1ZUPkjNbKYUllO-qO06wppIbt4Dj5q6ZQZmohgNsSdL2BPIVd3lG8hby1WhSTe73rV0jAxXn-ozDnxMxQBm0sH04r3qz8wQ5hdce1wMZy-Nh6mlP1yfnmY0mYwnQxLSS~00piXQbWdJ8lWWyLBrLAr9464vJCHij1iKXGIt4coxephQPTOp2f8QbepA3iEKu~BlJqqgzwjYTorHzk69NMMyszTqJIK2y-ljX5YQ9XEbFbyIqSwrQlEKx91dWQgReHrW1k77Jt8aNYy0frT7h91sxjSnlpu-4xqMNWk9uFMmcLwTqIadIRK8hMPHRIaZ2LHKBD-9N4K7YmvHZQ__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ',
    title: 'TC Forest Products',
    disciplines: [ 'Branding', 'Web' ],
    size: 'medium',
    link: 'http://tcforest.ca'
  }, {
    image: 'https://cdn2.dropmarkusercontent.com/45267/d3718f0aab598546c6d57065838d5b8a9a54d88b88100cc4a9eccb9b54720d6f/whitecap_tea.jpg?Expires=1536851896&Signature=NQODo2hSmmXyzx1dqBFRgBTDhT1gKdZ-x4PRQWrtLEDaUB8ANDQHS5PlBgZw5WixiD48rjjq48cmH3kET8F-I~S3YutpxYZrMirY~fXVut4BxujgYoz~~MR3KpV~a97FxMDF9EhbWv4xbvIzd7RPiJE5CkRl9hteQ11GYKO5yutGHMlPDOYOoBpLXcSEEyJlCuJ7FLP22pvR3dDQngBfSMTP0oBJAF2s4qYJe5W0jiQwEka-dIujqjENa-tQUgr9UE9SnGAbQNyWT3zcADnjLbFgt1NLfaBT6m~NFAYZ~3Ldks-znAsy-6rcxt-cJrOFXiVG6TfwmXrQTLbI1CNLWA__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ',
    title: 'Whitecap Coffee',
    disciplines: [ 'Branding', 'Web', 'Development', 'Collateral' ],
    size: 'wide',
    link: 'http://drinkwhitecap.ca'
  }, {
    image: 'https://cdn2.dropmarkusercontent.com/45267/64eb4aa773ff87f40e476c8e70cff626acf3f7fd76911e0adf0fd9e06c9738b6/mbhof_thumb.jpg?Expires=1536851747&Signature=DTPIoBqjh4ySj0yjxAQa3celbbDo3i2HhbTMt9VNbKjtI5oOxvMdZSw78yQ4gx6yvAX8-Un~576cgigv2atzI8mGf8q7l0shSRTKyXFRVQTnZ-nqbJLe675RpeMsjz9cea2sRy~s5AsUUyxeHOIVWpVdLXN92DldVjygYhSDRgy41c11wNuqGkjXYtHjWjNL2Yira8b3osOmaESDAlAxw75bM7e0bu30QGzXiI3FBdeTNMZnRiGW6PjdDYUtzHgiwsD5SwFte9WSocTZRwstKOo7FfPue74fmbV8t3puLuTk36C21ThMCF3r4depVj4VsV~tKvYwak71ROnfeRH8XQ__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ',
    title: 'Manitoba Baseball Hall of Fame',
    disciplines: [ 'Branding', 'Web' ],
    size: 'full',
    link: 'http://mbhof.ca'
  }, {
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Project 4',
    disciplines: [ 'Branding' ],
    size: 'medium'
  }, {
    image: 'https://source.unsplash.com/random/600x800',
    title: 'Project 5',
    disciplines: [ 'Branding' ],
    size: 'large'
  }, {
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Project 6',
    disciplines: [ 'Branding' ],
    size: 'medium'
  }, {
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Project 6',
    disciplines: [ 'Branding' ],
    size: 'medium'
  }, {
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Project 6',
    disciplines: [ 'Branding' ],
    size: 'medium'
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
