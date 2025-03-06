import ClientItem from "./ClientItem";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

interface CustomerListProps {
  customer: CustomerProps[];
  onDeleteCustomer: (name: string, email: string) => void;
}

export default function ListClients({ customer, onDeleteCustomer }: CustomerListProps) {
  return (
    <section className="flex flex-col gap-4">
      {customer.map((customer) => (
        <ClientItem 
          key={customer.id} 
          customer={customer} 
          onDeleteCustomer={onDeleteCustomer} 
        />
      ))}
    </section>
  );
}
