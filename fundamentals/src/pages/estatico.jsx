import Layout from "../components/Layout";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/clients/123");
  const client = await res.json();

  return {
    props: {
      client: {
        id: client.id,
        name: client.name,
        age: client.age,
      },
    },
  };
}

export default function estatico(props) {
  return (
    <Layout>
      <div>
        <strong> ID: </strong>
        <span>{props.client.id}</span>
      </div>
      <div>
        <strong> Nome: </strong>
        <span>{props.client.name}</span>
      </div>
      <div>
        <strong> Idade: </strong>
        <span>{props.client.age}</span>
      </div>
    </Layout>
  );
}
