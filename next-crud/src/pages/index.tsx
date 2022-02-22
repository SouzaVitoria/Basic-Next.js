import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../firebase-backend/db/CollectionClient";
import firebase from "../firebase-backend/config";

export default function Home() {
  const repo: ClientRepository = new CollectionClient();
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    repo.getAll().then(setClients);
  }, []);

  async function getAll() {
    await repo.getAll().then(currentClients => {
      setClients(currentClients);
      setVisible("table");
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    setVisible("form");
  }
  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 via-orange-400 to-blue-600">
      <Layout title="Cadastro Simples">
        {visible === "table" ? (
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
          <Form
            client={client}
            canceled={() => setVisible("table")}
            editClient={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
