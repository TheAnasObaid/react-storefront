const getColor = (product) => {
    let color;
    if (product.category === "beauty") color = "pink";
    else if (product.category === "fragrances") color = "teal";
    else if (product.category === "furniture") color = "orange";
    else if (product.category === "groceries") color = "green";
    else color = "gray";

    return color;
}

export default getColor;