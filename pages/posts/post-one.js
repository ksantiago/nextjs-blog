import Head from 'next/head'
import Link from 'next/Link'
import Layout from '../../components/layout'

const PostOne = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Post One</title>
        </Head>
        <h1>Post One</h1>
        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}

export default PostOne
