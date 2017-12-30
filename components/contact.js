export default () => (
  <div className='col col-2'>
    <div className='contact'>
      <h2>Contact</h2>

      <p><a href="mailto:hi@collectif.co">Send us an email</a></p>
      <p><a href="https://twitter.com/intent/tweet?text=@collectifco%20%F0%9F%91%8B%20hello%20Collectif%21" target="_blank">Tweet at us</a></p>
    </div>
    <div className='team'>
      <h2>Who we are</h2>

      <p><a href="https://twitter.com/jondueck">@jondueck</a></p>
      <p><a href="https://twitter.com/josiahwiebe">@josiahwiebe</a></p>
    </div>

    <style jsx>{`
      .team {
        margin-top: 3rem;
      }
    `}

    </style>
  </div>
)
