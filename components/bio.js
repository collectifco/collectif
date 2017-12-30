export default () => (
  <div className='col col-1'>
    <img src="/static/collectif-wordmark.svg" className='wordmark' />

    <p>We're an independent design &amp; development studio focused on finding clear and engaging solutions for companies looking to tell their story.</p>
    <p>Now booking for {getSeason()}.</p>

    <style jsx>{`
      .wordmark {
        max-width: 120px;
        margin-bottom: 1rem;
      }
    `}
    </style>

  </div>
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
