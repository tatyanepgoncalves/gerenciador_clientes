import { FiTrash} from "react-icons/fi"

export default function ListClients() {
  return (
    <section className="flex flex-col ">
      <article className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200">
        <p><span className="font-medium">Nome:</span> Tatyane</p>
        <p><span className="font-medium">Email:</span> taty@email.com</p>
        <p className="uppercase"><span className="font-medium capitalize">Status:</span> Ativo</p>

        <button className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2">
          <FiTrash size={18} color="#fff" />
        </button>
      </article>
    </section>
  )
}
