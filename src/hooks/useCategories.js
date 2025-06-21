import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()

        apiClient
            .get("/products/categories", { signal: controller.signal })
            .then((res) => {
                setCategories(res.data);
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
                setLoading(false)
            })

        return () => controller.abort()
    }, []);

    return { categories, error, isLoading }
}

export default useCategories;