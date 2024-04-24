import { useRouter } from "next/router";
import styles from "./Login.module.scss";
import Link from "next/link";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-xl font-bold">Login Pages</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red", border: "1px solid black", borderRadius: "5px" }}>
        Belum punya akun? Registrasi <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
