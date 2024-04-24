import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/notfound.png" alt="notfound" className={styles.error__image} />
      <div>404 | Halaman Tidak Ditemukan🤪</div>
    </div>
  );
};

export default Custom404;
