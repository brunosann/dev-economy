import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const AddExpense = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <Button handleClick={openModal} title="Nova Receita" />
      <Modal show={modal} closeModal={closeModal}>
        <h2 className="text-3xl text-white text-center font-semibold mb-4">
          Adicione sua Despesa
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="value" className="block text-white">
              Valor:
            </label>
            <input
              type="text"
              id="value"
              placeholder="R$ 59,93"
              className="w-full rounded focus:outline-none py-2 px-4"
            />
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
            >
              <option selected>Selecione a categoria &hellip;</option>
              <option value="">category 1</option>
              <option value="">category 2</option>
              <option value="">category 3</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-white">
              Descrição Opcional:
            </label>
            <input
              type="text"
              id="description"
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
              type="button"
              className="w-full py-2 px-4 font-semibold rounded bg-white text-blue-500 focus:outline-none transition-all hover:bg-blue-100 hover:shadow-md"
            >
              Adicionar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddExpense;
