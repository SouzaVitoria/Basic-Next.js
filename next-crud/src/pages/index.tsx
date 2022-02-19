import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client("Vitória", 21, "1"),
    new Client("Vitória Souza", 22, "2"),
    new Client("Danilo", 29, "3"),
    new Client("Danilo Caraça", 30, "4"),
  ];

  function selectClient(client: Client) {
    console.log("selected", client);
  }
  function deleteClient(client: Client) {
    console.log("deleted", client);
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 via-orange-400 to-blue-600">
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button color="blue" className="mb-4">
            Novo Cliente
          </Button>
        </div>
        {/* <Table
          clients={clients}
          selectClient={selectClient}
          deleteClient={deleteClient}
        /> */}
        <Form client={clients[2]} />
      </Layout>
    </div>
  );
}
