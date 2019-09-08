import Link from 'next/link';
import Header from '../components/header';
const Index = () => {
    return (
      <div>
      <Header />
        <h1>My Portfolio Site</h1>
        <p>
            Welcome to my portfolio! This is designed with Next.js!
            Please{' '}
                <Link href="/contact">
                    <a>contact me</a>
                </Link>{' '}
            to get more information.
        </p>
      </div>
    )
}

export default Index;