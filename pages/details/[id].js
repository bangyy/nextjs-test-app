import Layout from '../../components/layout'
import { getAllDetailsIds, getDetailData } from '../../lib/details'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const detailData = await getDetailData(params.id)
  return {
    props: {
      detailData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllDetailsIds()
  return {
    paths,
    fallback: false
  }
}

export default function Detail({ detailData }) {
  return (
    <Layout>
      <Head>
        <title>{detailData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{detailData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={detailData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: detailData.contentHtml }} />
      </article>
    </Layout>
  )
}
