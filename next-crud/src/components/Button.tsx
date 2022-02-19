interface ButtonProps {
  color?: "green" | "blue" | "red";
  className?: string;
  children: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-${props.color}-400 to-${props.color}-700 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
