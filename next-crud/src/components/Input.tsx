interface InputProps {
  inputLabel: string;
  type?: "inputLabel" | "number";
  value: any;
  readOnly?: boolean;
  className?: string;
  onChange?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label htmlFor="name" className="mb-1">
        {props.inputLabel}
      </label>
      <input
        id="name"
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
          props.readOnly ?? "focus:bg-white"
        }`}
        onChange={e => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
