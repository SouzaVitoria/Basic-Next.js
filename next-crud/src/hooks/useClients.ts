
import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../firebase-backend/db/CollectionClient";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {

  const {
    isVisibleTable,
    showForm,
    showTable
  } = useTableOrForm()

  const repo: ClientRepository = new CollectionClient();
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    repo.getAll().then(setClients);
  }, []);

  async function getAll() {
    await repo.getAll().then(currentClients => {
      setClients(currentClients);
      showTable()
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm()
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
    showForm()
  }

  return {
    isVisibleTable,
    showTable,
    client,
    clients,
    newClient,
    saveClient,
    selectClient,
    deleteClient
  }
}
