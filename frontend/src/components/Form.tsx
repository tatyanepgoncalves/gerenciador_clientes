export default function Form() {
  return (
    <form className="flex flex-col my-6">
      <label htmlFor="input-name" className="font-medium text-white">
        Nome
      </label>
      <input
        type="text"
        placeholder="Digite seu nome completo..."
        id="input-name"
        className="w-full mb-5 p-2 bg-white rounded-sm"
      />

      <label htmlFor="input-email" className="font-medium text-white">
        Email
      </label>
      <input
        type="email"
        placeholder="Digite seu email..."
        id="input-name"
        className="w-full mb-5 p-2 bg-white rounded-sm"
      />

      <input
        type="submit"
        value="Cadastrar"
        className="cursor-pointer w-full p-2 bg-green-500 font-medium  rounded"
      />
    </form>
  );
}
