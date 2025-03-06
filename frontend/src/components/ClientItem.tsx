import { FiTrash } from "react-icons/fi";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
}

interface ClientItemProps {
  customer: CustomerProps;
  onDeleteCustomer: (id: string) => void;
}

export default function ClientItem({
  customer,
  onDeleteCustomer,
}: ClientItemProps) {
  return (
    <article
      key={customer.id}
      className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
    >
      <p>
        <span className="font-medium">Nome:</span> {customer.name}
      </p>
      <p>
        <span className="font-medium">Email:</span> {customer.email}
      </p>
      <p className="uppercase">
        <span className="font-medium capitalize">Status:</span>{" "}
        {customer.status ? "Ativo" : "Inativo"}
      </p>

      <button
        className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
        onClick={() => onDeleteCustomer(customer.id)}
      >
        <FiTrash size={18} color="#fff" />
      </button>
    </article>
  );
}
