const Container = ({ children, className }) => (
  <div className={className ? `container ${className}` : 'container'}>
    {children}
    <style jsx>{`
      .container {
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 0.5rem;
        overflow: hidden;
      }
    `}</style>
  </div>
)

export default Container
