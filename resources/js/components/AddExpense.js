import React, { useState } from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import CurrencyInput from "react-currency-masked-input";
import Modal from "./Modal";
import Button from "./Button";
import toast from "react-hot-toast";

const AddExpense = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const { expenseCategories: categories } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    value: "",
    category: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("despesas.store"), {
      onSuccess: () => {
        setData({ value: "", category: "", description: "" });
        closeModal();
        toast.success("Despesa adicionada");
      },
    });
  };

  return (
    <>
      <Button handleClick={openModal} title="Nova Despesa" />
      <Modal show={modal} closeModal={closeModal}>
        <h2 className="text-3xl text-white text-center font-semibold mb-4">
          Adicione sua Despesa
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label htmlFor="value" className="block text-white">
              Valor:
            </label>
            <CurrencyInput
              autoComplete="off"
              id="value"
              value={data.value}
              placeholder="59,93"
              required
              onChange={(event, value) => setData("value", value)}
              className="w-full rounded focus:outline-none py-2 px-4"
            />
            {errors.value && (
              <p className="text-sm text-red-700 mt-1">{errors.value}</p>
            )}
          </div>
          <div>
            <label htmlFor="category" className="block text-white">
              Categoria:
            </label>
            <select
              name="category"
              id="category"
              className="w-full rounded focus:outline-none h-10 px-4"
              placeholder="teste"
              value={data.category}
              onChange={({ target }) => setData("category", target.value)}
            >
              <option defaultValue="">Selecione a categoria &hellip;</option>
              {categories.map(({ category, id }) => (
                <option key={id} value={id}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-sm text-red-700 mt-1">{errors.category}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-white">
              Descrição Opcional:
            </label>
            <input
              type="text"
              id="description"
              value={data.description}
              onChange={({ target }) => setData("description", target.value)}
              placeholder="pastel da feira..."
              className="w-full rounded focus:outline-none py-2 px-4"
            />
          </div>
          <div className="sm:col-span-2 flex gap-4">
            <button
              onClick={closeModal}
              type="button"
              className="w-full py-2 px-4 font-semibold rounded bg-white text-blue-500 focus:outline-none transition-all hover:bg-blue-100 hover:shadow-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-full py-2 px-4 font-semibold rounded bg-white text-blue-500 focus:outline-none transition-all hover:bg-blue-100 hover:shadow-md"
              disabled={processing}
            >
              {processing ? "Salvando..." : "Adicionar"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddExpense;
