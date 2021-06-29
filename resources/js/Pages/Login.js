import React, { useEffect } from "react";
import { useForm, InertiaLink } from "@inertiajs/inertia-react";
import AuthInput from "../components/AuthInput";

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      setData({});
    };
  }, []);

  const handleChange = ({ target }) => setData(target.id, target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("login.submit"));
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
            <span>Não tem uma conta?</span>
            <InertiaLink className="underline" href={route("register")}>
              Cadastra-se!
            </InertiaLink>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center">
            Login
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <AuthInput
              label="Email"
              id="email"
              type="email"
              error={errors.email}
              onChange={handleChange}
              value={data.email}
            />
            <AuthInput
              autoComplete="off"
              label="Senha"
              id="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              value={data.password}
            />
            {errors.message && (
              <span className="text-sm text-red-400">{errors.message}</span>
            )}
            <div>
              <button
                type="submit"
                disabled={processing}
                className={`auth-btn ${processing && "opacity-70"}`}
              >
                {processing ? "Verificando..." : "Entrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
