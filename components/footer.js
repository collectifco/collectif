import Container from './container'
import { Roundel } from './brandAssets'

export default () => (
  <footer>
    <Container>
      <Roundel />
    </Container>
    <Container>
      <div className='col col-1'>
        <h2>Contact</h2>

        <p><a href="mailto:hi@collectif.co">Send us an email</a></p>
        <p><a href="https://twitter.com/intent/tweet?text=@collectifco%20%F0%9F%91%8B%20hello%20Collectif%21" target="_blank" rel="noopener">Tweet at us</a></p>
        <p><small>Located in Winkler, Manitoba Canada</small></p>
      </div>
      <div className='col col-2'>
        <h2>Who we are</h2>
        <p><a href="https://twitter.com/jondueck" target="_blank" rel="noopener">@jondueck</a></p>
        <p><a href="https://twitter.com/josiahwiebe" target="_blank" rel="noopener">@josiahwiebe</a></p>
      </div>
    </Container>
    <style jsx>{`
      footer {
        margin-top: 2rem;
        padding-bottom: 2rem;
        overflow: hidden;
        @media (min-width: 768px) {
          margin-top: 3rem;
        }
      }
      small {
        font-size: 0.75rem;
      }
    `}
    </style>
  </footer>
)
