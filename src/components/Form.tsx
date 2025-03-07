import { useRef, FormEvent } from "react";

interface CustomerFormProps {
  onAddCustomer: (name: string, email: string) => void;
}

export default function Form({ onAddCustomer }: CustomerFormProps) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nameRef.current?.value || !emailRef.current?.value) return;

    onAddCustomer(nameRef.current?.value, emailRef.current?.value);
    nameRef.current.value = "";
    emailRef.current.value = "";
  }

  return (
    <form className="flex flex-col my-6" onSubmit={handleSubmit}>
      <label htmlFor="input-name" className="font-medium text-white">
        Nome
      </label>
      <input
        type="text"
        placeholder="Digite seu nome completo..."
        id="input-name"
        className="w-full mb-5 p-2 bg-white rounded-sm"
        ref={nameRef}
      />

      <label htmlFor="input-email" className="font-medium text-white">
        Email
      </label>
      <input
        type="email"
        placeholder="Digite seu email..."
        id="input-name"
        className="w-full mb-5 p-2 bg-white rounded-sm"
        ref={emailRef}
      />

      <input
        type="submit"
        value="Cadastrar"
        className="cursor-pointer w-full p-2 bg-green-500 font-medium  rounded"
      />
    </form>
  );
}
