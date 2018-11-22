import Head from './_head'
import Footer from './footer'
import Container from './container'
import { Wordmark } from './brandAssets'
import { vulfMono, vulfMonoItalic, calibreRegular } from './fonts'

const Layout = ({ children }) => (
  <div className='root'>
    <Head />
    <header>
      <Container className='flex flex-v-align'>
        <div className='nav-left'>
          <Wordmark />
        </div>
        <div className='nav-right'>
          <nav>
            <ul>
              <li><a href='#work'>Work</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
    <main>
      <Container>
        {/* Content goes here */}
        { children }
      </Container>
    </main>
    <Footer />
    <style jsx global>{vulfMono}</style>
    <style jsx global>{vulfMonoItalic}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      ::selection {
        background-color: #005eff;
        color: #fff;
      }

      body {
        background-color: #fefefe;
        color: #292D2D;
        font-family: "Vulf Mono", courier new, monospace;
        margin: 0;
        padding: 2rem;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.6;
        height: 100%;
        display: flex;
        justify-content: center;
        @media (min-width: 768px) {
          padding: 6rem 4rem 4rem;
        }
        @media (prefers-color-scheme: dark) {
          background-color: mix(#000, #292D2D, 50%);
          color: #fefefe;
        }
      }

      a {
        color: #005eff;
        /* font-weight: bold; */
        text-decoration: none;
        &:hover {
          background: #005eff;
          color: #fff;
        }
        @media (prefers-color-scheme: dark) {
          color: mix(#fff, #005eff, 25%);
        }
      }

      h2 {
        font-family: calibre, sans-serif;
        font-weight: normal;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        line-height: 1;
      }

      img {
        max-width: 100%;
      }

      .content {
        display: block;
        clear: both;
        margin-top: 3rem;
      }

      .col {
        @media (min-width: 768px) {
          float: left;
          align-self: flex-start;
        }
      }

      .col-1 {
        @media (min-width: 768px) {
          width: 64%;
          margin-right: 4%;
        }
      }

      .col-2 {
        margin-top: 2rem;
        @media (min-width: 768px) {
          width: 32%;
          margin-top: 0;
        }
      }

      .flex {
        display: flex;
      }

      .flex-v-align {
        align-items: center;
      }

    `}</style>
    <style jsx>{`
      .nav-left, .nav-right {
        flex: 1 1 auto;
      }

      .nav-right {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-family: "Vulf Mono", courier new, monospace;

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          li {
            display: inline-block;
            margin-left: 2rem;
          }
        }
      }
    `}</style>
  </div>
)

export default Layout
