import Link from 'next/link';
import Header from '../components/header';
const Contact = () => {
    return (
      <div>
      <Header />
        <h1>contact me</h1>
        <p>
            Welcome to my portfolio! This is designed with Next.js!
            Please{' '}
                <Link href="/index">
                    <a>goback</a>
                </Link>{' '}
            to get more information.
        </p>
      </div>
    )
}

export default Contact;