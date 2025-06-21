import { List } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const CategoriesList = () => {
  const { categories, error, isLoading } = useCategories();

  if (error) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <List.Root
      listStyle="none"
      gap={5}
      display="flex"
      flexDirection={{ sm: "row", md: "column" }}
    >
      {categories.map((category) => (
        <List.Item key={category.slug}>{category.name}</List.Item>
      ))}
    </List.Root>
  );
};
export default CategoriesList;
