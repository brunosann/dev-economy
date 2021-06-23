import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import AuthInput from "../components/AuthInput";

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      setData({});
    };
  }, []);

  const handleChange = ({ target }) => setData(target.id, target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("register.submit"));
  };

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
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <AuthInput
              label="Nome"
              id="name"
              type="text"
              autoFocus
              error={errors.name}
              onChange={handleChange}
              value={data.name}
            />
            <AuthInput
              label="Email"
              id="email"
              type="email"
              error={errors.email}
              onChange={handleChange}
              value={data.email}
            />
            <AuthInput
              label="Senha"
              id="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              value={data.password}
            />
            <AuthInput
              label="Confirme a senha"
              id="password_confirmation"
              type="password"
              error={errors.password_confirmation}
              onChange={handleChange}
              value={data.password_confirmation}
            />

            <div>
              <button
                type="submit"
                disabled={processing}
                className={`auth-btn ${processing && "opacity-70"}`}
              >
                {processing ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
