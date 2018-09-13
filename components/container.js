const Container = ({ children }) => (
  <div className='container'>
    { children }
    <style jsx>{`
      .container {
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 0.5rem;
      }
    `}</style>
  </div>
)

export default Container
