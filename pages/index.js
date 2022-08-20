import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedDetailsData } from '../lib/details'
import Link from 'next/link'
import Date from '../components/date'

//export async function getStaticProps() {
export async function getServerSideProps() {
  const allDetailsData = getSortedDetailsData()
  return {
    props: {
      allDetailsData
    }
  }
}

export default function Home({ allDetailsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allDetailsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/details/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
