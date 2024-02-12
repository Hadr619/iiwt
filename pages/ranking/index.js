import { NextSeo } from 'next-seo';
import { createClient} from 'contentful';
import GridRow from "../../components/GridRow/GridRow";
import styles from './ranking.module.scss';

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  
    const res = await client.getEntries({ content_type: 'rankingList' }) //whatever content type is set up in content model

    return {
      props: {
        rankingList: res.items[0]
        
      },
      revalidate: 1
    }
  
  }

export default function Ranking({rankingList}) {
    console.log(rankingList.fields)
    return (
        <div className={styles.rankingWrapper}>
            <div className="inner">
                <NextSeo 
                title="Is It Worse Than - Ranking"
                description="A list of bands as compared to 311."
                />
                <div className={styles.tierContainer}>
                <GridRow 
                    name="S"
                    content={rankingList.fields.sTier}
                />
                <GridRow 
                    name="A"
                    content={rankingList.fields.aTier}
                />
                <GridRow 
                    name="B"
                    content={rankingList.fields.bTier}
                />
                <GridRow 
                    name="C"
                    content={rankingList.fields.cTier}
                />
                <GridRow 
                    name="D"
                    content={rankingList.fields.dTier}
                />
                <GridRow 
                    name="311"
                    content={rankingList.fields.tier}
                />
                <GridRow 
                    name="F"
                    content={rankingList.fields.fTier}
                />
                <GridRow 
                    name="F-"
                    content={rankingList.fields.fMinusTier}
                />
            </div>
            </div>
        </div>
    )
}