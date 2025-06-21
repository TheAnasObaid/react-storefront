import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        apiClient
            .get("/products", { signal: controller.signal })
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
                setLoading(false)
            })

        return () => controller.abort()
    }, []);

    return { products, error, isLoading }
}

export default useProducts;