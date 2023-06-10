import { BASE_URL } from "@/constant/url";
import { Player } from "@/types/SampleResponse";
import { Card, Image, Space } from "antd";

export default function HomePage({ data }: { data: Player }) {
  return (
    <Card style={{ maxWidth: 1000, margin: "auto" }}>
      <h3>{data.strPlayer}</h3>
      <Space size={12} align="center" direction="vertical">
        <Image
          alt={data.strPlayer}
          style={{ width: "100%" }}
          src={`${data.strBanner}`}
          placeholder={
            <Image
              alt={data.strPlayer}
              preview={false}
              src={`${BASE_URL}${data.strBanner}`}
              style={{ width: "100%" }}
            />
          }
        />
        <p style={{ textAlign: "justify" }}>{data.strDescriptionEN}</p>
      </Space>
    </Card>
  );
}
