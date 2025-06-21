import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        apiClient
            .get("/products", { signal: controller.signal })
            .then((res) => setProducts(res.data.products))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
            })

        return () => controller.abort()
    }, []);

    return { products, error }
}

export default useProducts;