import { useRouter } from "next/router";
import styles from "./Login.module.scss";
import Link from "next/link";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    console.log("handleLogin");
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-xl font-bold">Login Pages</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red" }}>
        Belum punya akun? Registrasi <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
