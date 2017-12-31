export default () => (
  <div className='col col-2'>
    <div className='social'>
      <h2>On the web</h2>

      <p>@collectifco</p>
      <p><a href="https://twitter.com/collectifco">on Twitter</a> </p>
      <p><a href="https://github.com/collectifco" target="_blank" rel="noopener">on Github</a></p>
    </div>
    <div className='capabilities'>
      <h2>Capabilities</h2>

      <ul>
        <li>Brand design</li>
        <li>Web design & development</li>
        <li>Web apps</li>
        <li>Print design</li>
        <li>Promo materials</li>
      </ul>
    </div>

    <style jsx>{`
      .capabilities {
        margin-top: 3rem;
      }
      ul {
        font-weight: 100;
        font-size: 0.875rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li:before {
        content: '–';
        padding-right: 0.325rem;
      }
    `}

    </style>
  </div>
)
