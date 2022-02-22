import Client from "../core/Client";
import { editionIcon, trashIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  selectClient?: (client: Client) => void;
  deleteClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.selectClient || props.deleteClient;
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions && <th className="p-4">Ações</th>}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-300" : "bg-purple-200"} `}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions && renderActions(client)}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center">
        {props.selectClient && (
          <button
            className="flex justify-center items-center text-green-600 p-2 m-1 rounded-full hover:bg-purple-50"
            onClick={() => props.selectClient?.(client)}
          >
            {editionIcon}
          </button>
        )}

        {props.deleteClient && (
          <button
            className="flex justify-center items-center text-red-500 p-2 m-1 rounded-full hover:bg-purple-50"
            onClick={() => props.deleteClient?.(client)}
          >
            {trashIcon}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-600 to-purple-900">
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
