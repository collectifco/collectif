import Head from '../components/head'
import Roundel from '../components/roundel'
import Bio from '../components/bio'
import Contact from '../components/contact'
import { vulfMonoLight, vulfMonoLightItalic } from '../components/fonts'

export default () => (
  <div className='root'>
    <Head />
    <main>
      <Roundel />
      <section className='content'>
        <Bio />
        <Contact />
      </section>
    </main>
    <style jsx global>{vulfMonoLight}</style>
    <style jsx global>{vulfMonoLightItalic}</style>

    <style jsx global>{`

      $bg-color: mix(#303738, #222);

      * {
        box-sizing: inherit;
      }

      html {
        height: 100%;
        min-height: 100%;
        box-sizing: border-box;
      }

      body {
        background-color: $bg-color;
        color: #eee;
        font-family: "Vulf Mono Light", courier new, monospace;
        padding: 2rem;
        font-size: 1.25rem;
        line-height: 1.6;
        height: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 768px) {
          padding: 4rem;
        }
      }

      .root {
        max-width: 55rem;
      }

      h2 {
        font-size: 1rem;
        font-family: "Vulf Mono Light Italic", courier new, monospace;
        margin-bottom: 2rem;
        line-height: 1;
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

      p {
        font-weight: 100;
        font-size: 0.875rem;
      }

      a {
        color: #74cdda;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

    `}</style>
  </div>
)
