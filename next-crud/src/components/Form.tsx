import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id && <Input className="mb-4" inputLabel="ID" value={id} readOnly />}
      <Input
        className="mb-4"
        inputLabel="Nome"
        value={name}
        onChange={setName}
      />
      <Input inputLabel="Idade" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button color={id ? "blue" : "green"} className="mr-2">
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button color="red">Cancelar</Button>
      </div>
    </div>
  );
}
