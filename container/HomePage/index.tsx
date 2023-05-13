import { BASE_URL } from "@/constant/url";
import { SampleResponse } from "@/types/SampleResponse";
import { Card, Image, Space } from "antd";

export default function HomePage({ data }: { data: SampleResponse }) {
    return (
        <Card style={{ maxWidth: 1000, margin: "auto" }}>
            <h3>{data.data.attributes.title}</h3>
            <Space size={12} align="center" direction="vertical">
                <Image
                    alt={data.data.attributes.image.data.attributes.name}
                    style={{ width: "100%", maxWidth: "500px" }}
                    src={`${BASE_URL}${data.data.attributes.image.data.attributes.formats.large.url}`}
                    placeholder={
                        <Image
                            alt={data.data.attributes.image.data.attributes.name}
                            preview={false}
                            src={`${BASE_URL}${data.data.attributes.image.data.attributes.formats.thumbnail.url}`}
                            style={{ width: "100%", maxWidth: "500px" }}
                        />
                    }
                />
                <p style={{ textAlign: "justify" }}>{data.data.attributes.body}</p>
            </Space>
        </Card>
    );
}
