import Head from './_head'
import Footer from './footer'
import Container from './container'
import Link from 'next/link'
import { Wordmark } from './brandAssets'
import { vulfMono, vulfMonoItalic } from './fonts'

const Layout = ({ children }) => (
  <div className='root'>
    <Head />
    <header>
      <Container>
        <Wordmark />
        {/* <nav>
          <ul>
            <li><Link href='/'><a>Work</a></Link></li>
            <li><Link href='/studio'><a>Studio</a></Link></li>
          </ul>
        </nav> */}
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
      }

      a {
        color: #005eff;
        /* font-weight: bold; */
        text-decoration: none;
        &:hover {
          background: #005eff;
          color: #fff;
        }
      }

      h2 {
        font-size: 1.25rem;
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
    `}</style>
  </div>
)

export default Layout
