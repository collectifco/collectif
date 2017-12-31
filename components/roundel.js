export default () => (
  <div>
    <img src="/static/collectif-roundel.svg" alt="Collectif" className='roundel' />
    <style jsx>{`
      .roundel {
        width: 50%;
        margin-left: -0.5rem;
        max-width: 5rem;
        animation: rotation 6s infinite linear;
      }

      .roundel:hover {
        animation: rotation 1s infinite linear;
      }

      @keyframes rotation {
        from {
          transform: rotate(359deg);
        }
        to {
          transform: rotate(0deg);
        }
      }

      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(359deg);
        }
        to {
          -webkit-transform: rotate(0deg);
        }
      }
    `}</style>
  </div>
)
