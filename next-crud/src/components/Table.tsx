import Client from "../core/Client";

interface TableProps {
  clients: Client[];
}

export default function Table(props: TableProps) {
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
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
        </tr>
      );
    });
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
