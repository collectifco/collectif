export default ({ children, items }) => (
  <div className='grid-wrapper'>
    <div className='unsupported'>
      <p>Sorry, your browser is currently unsupported by some experimental features we're using.</p>
    </div>
    <div className='grid'>
      { items.map((item, i) => (
        <figure className={`item item__${item.size}`} key={i}>
          {item.position === 'top' &&
            <Caption title={item.title} disciplines={item.disciplines} align='top' />
          }
          <a href={item.link} target='_blank'>
            <img src={item.image} />
          </a>
          {item.position === 'bottom' &&
            <Caption title={item.title} disciplines={item.disciplines} align='bottom' />
          }
        </figure>
      ))}
    </div>
    <style jsx>{`
      .grid-wrapper {
        margin-bottom: 10rem;
        @supports(display: grid) {
          display: block
        }
      }

      .unsupported {
        display: block;
        @supports(display: grid) {
          display: none;
        }
      }

      .grid {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: auto;
        grid-auto-flow: row dense;
      }

      .item {
        margin: 0;
        grid-column-start: auto;
        grid-row-start: auto;
        grid-column: 1/-1;
        grid-row-end: span 3;
        grid-column-end: span 2;

        @media screen and (min-width: 500px) {
          grid-column: auto;
          grid-row: auto;
        }

        &__wide {
          grid-column-end: span 2;
        }

        &__medium {
          grid-row-end: span 2;
        }

        &__large {
          grid-row-end: span 3;
        }

        &__full {
          grid-row-end: span 3;
          grid-column-end: span 2;
          @media screen and (min-width: 500px) {
            grid-column: 1/-1;
            grid-row-end: span 2;
          }
        }

        img {
          display: block;
          width: 100%;
          object-fit: cover;
        }

      }

      .item a {
        margin: 0;
        padding: 0;
        &:hover {
          background: none;
        }
      }
    `}
      </style>
    </div>
)

const Caption = ({title, disciplines, align}) => (
  <figcaption>
    <span className='project-title'>{title}</span>
    <span className='project-discipline'>{disciplines.join(', ')}</span>
    <style jsx>{`
      figcaption {
        display: block;
        position: relative;
        /* padding-left: 50px; */
        padding: 10px 50px 10px;
      }

      figcaption::before {
        content: '';
        border-left: 3px solid #000eff;
        width: 1px;
        height: 50px;
        position: absolute;
        top: ${(align === 'bottom' ? '-25px' : '50px')};
        left: 25px;
      }
      .project-title {
        display: block;
      }

      .project-discipline {
        font-size: 0.825rem;
        font-family: 'Vulf Mono Italic', monospace;
        font-style: italic;
      }
    `}</style>
  </figcaption>
)
