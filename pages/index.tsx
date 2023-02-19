import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Post from '../components/post'
import { PostData, PostDataListProps } from '../types/postdata'
import { GetPosts } from '../lib/postdata_api'

export const getStaticProps: GetStaticProps = async (_context) => {
  // fetch list of posts
  const posts: PostData[] = await GetPosts()
  return {
    props: {
      postDataList: posts,
    },
  }
}

const IndexPage: NextPage<PostDataListProps> = ({
  postDataList,
}: PostDataListProps) => {
  return (
    <main>
      <Head>
        <title>２ちゃんねるまとめるまとめ</title>
      </Head>

      <h1>お当サイトを今まで利用していただいた皆様へのお知らせ</h1>
      <div>２ちゃんねるまとめるまとめの運営を継続していただける方にサイトの譲渡いたしますので<br />
        サイトが再開されるまで今しばらくお待ちください。<br />
        2週間から1か月以内に再開する予定にまります。</div>

    </main>
  )
}

export default IndexPage
