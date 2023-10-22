import useSWR from "swr";
import styles from './index.module.css';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
    const { data, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
    );

    if (error) return <div>An error has occurred.</div>
    if (!data) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>{data.name}</h1>
                <p className={styles.description}>{data.description}</p>
                <p>
                    <strong>? {data.subscribers_count}</strong>{" "}
                    <strong>? {data.subscribers_count}</strong>{" "}
                    <strong>? {data.forks_count}</strong>
                </p>
            </main>
        </div>
    );
};

export default Home;