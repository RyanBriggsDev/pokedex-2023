import Container from './Container'

export default function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <footer className="h-10 flex items-center bg-white justify-center">
      <Container>
        <p>
          ©{' '}
          <a
            href="https://github.com/ryanbriggsdev"
            target="_blank"
            rel="noreferrer"
          >
            Ryan Briggs{' '}
          </a>
          {year}
        </p>
      </Container>
    </footer>
  )
}
