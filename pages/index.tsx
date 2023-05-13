import HomePage from "@/container/HomePage";
import PublicLayout from "@/component/layout/PublicLayout";
import { SampleResponse } from "@/types/SampleResponse";
import Head from "next/head";
import { BASE_URL, HOST_URL } from "@/constant/url";

function Home({ data }: { data: SampleResponse }) {
    const head = {
        title: data.data.attributes.title || "",
        description: data.data.attributes.body || "",
        image: BASE_URL + data.data.attributes.image.data.attributes.formats.thumbnail.url || "",
        url: HOST_URL || "",
    };

    return (
        <div>
            <Head>
                <title>{head.title}</title>
                <meta name="description" content={head.description} key="desc" />

                {/*<!-- Google / Search Engine Tags -->*/}
                <meta itemProp="name" content={head.title} />
                <meta itemProp="description" content={head.description} />
                <meta itemProp="image" content={head.image} />

                {/*<!-- Facebook Meta Tags -->*/}
                <meta property="og:title" content={head.title} />
                <meta property="og:description" content={head.description} />
                <meta property="og:image" content={head.image} />
                <meta property="og:url" content={head.url} />
                <meta property="og:type" content="website" />

                {/*<!-- Twitter Meta Tags -->*/}
                <meta name="twitter:title" content={head.title} />
                <meta name="twitter:description" content={head.description} />
                <meta name="twitter:image" content={head.image} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <PublicLayout>
                <HomePage data={data} />
            </PublicLayout>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`${BASE_URL}/api/contents/1?populate=*`);
    const data = await res.json();

    return { props: { data } };
}

export default Home;
