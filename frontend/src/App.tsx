import { useState, useEffect } from "react";
import { api } from "./services/api";
import Form from "./components/Form"
import ListClients from "./components/ListClients";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export default function App() {
  const [customer, setCustomer] = useState<CustomerProps[]>([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomer(Array.isArray(response.data) ? response.data : []);
  }

  

  // Função de cadastro
  async function handleAddCustomer(name: string, email: string) {
    const response = await api.post("/customer", { name, email })

    setCustomer((allCustomers) => [...allCustomers, response.data]);
  }

  async function handleDeleteCustomer(id: string) {
    try {
     
      await api.delete(`/customer/${id}`)
      console.log(`Cliente com ID ${id} deletado com sucesso`)

      setCustomer((prevCustomers) => prevCustomers.filter(customer => customer.id !== id))
    } catch(err) {
      console.log("Erro ao deletar cliente:", err)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full  md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        <Form 
          onAddCustomer={handleAddCustomer} 
        />
        <ListClients 
          customer={customer} 
          onDeleteCustomer={handleDeleteCustomer} 
        />

        
      </main>
    </div>
  );
}
