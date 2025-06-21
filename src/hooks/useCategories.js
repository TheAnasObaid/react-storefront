import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        apiClient
            .get("/products/categories", { signal: controller.signal })
            .then((res) => setCategories(res.data))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
            })

        return () => controller.abort()
    }, []);

    return { categories, error }
}

export default useCategories;