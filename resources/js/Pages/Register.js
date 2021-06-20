import React from "react";

const Register = () => {
  return (
    <main className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-center gap-3">
          <div className="text-4xl font-bold tracking-wider text-center">
            <a href="#">
              <img src="/images/logooo.svg" alt="logo" />
            </a>
          </div>
          <p className="font-normal text-center">
            Tome o controle de seus gastos
          </p>
          <p className="flex flex-col items-center justify-center text-center">
            <span>Ja tem uma conta?</span>
            <a href="#" className="underline">
              Entrar!
            </a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center">
            Cadastrar-se
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-500"
              >
                Nome
              </label>
              <input type="text" id="name" autoFocus className="auth-input" />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email
              </label>
              <input type="email" id="email" className="auth-input" />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-500"
              >
                Senha
              </label>
              <input type="password" id="password" className="auth-input" />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="co-password"
                className="text-sm font-semibold text-gray-500"
              >
                Confirme a Senha
              </label>
              <input type="password" id="co-password" className="auth-input" />
            </div>
            <div>
              <button type="submit" className="auth-btn">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
