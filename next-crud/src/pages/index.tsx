import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    showTable,
    isVisibleTable,
    newClient,
    saveClient,
    selectClient,
    deleteClient,
  } = useClients();

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 via-orange-400 to-blue-600">
      <Layout title="Cadastro Simples">
        {isVisibleTable ? (
          <>
            <div className="flex justify-end">
              <Button color="blue" className="mb-4" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectClient={selectClient}
              deleteClient={deleteClient}
            />
          </>
        ) : (
          <Form client={client} canceled={showTable} editClient={saveClient} />
        )}
      </Layout>
    </div>
  );
}
