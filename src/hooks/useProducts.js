import { useEffect, useState } from "react";
import apiClient, { controller } from "../services/api-client";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        apiClient
            .get("/products", { signal: controller.signal })
            .then((res) => setProducts(res.data.products));

        return () => controller.abort();
    }, []);

    return products
}

export default useProducts;