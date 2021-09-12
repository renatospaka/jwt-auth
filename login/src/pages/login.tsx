import { FormEvent } from "react";
import styles from "../styles/LoginPage.module.css";
import { http } from "../utils/http";

const LoginPage = () => {
  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    const username = (document.querySelector("#username") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;
    // console.log(username, password)

    const { data } = await http.post("login", { username, password });
    console.log(data.token)
  }

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;