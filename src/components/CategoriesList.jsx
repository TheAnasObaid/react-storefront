import { Button, Heading, List } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const CategoriesList = ({ onSelectCategory }) => {
  const { categories, error, isLoading } = useCategories();

  if (error) return null;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Heading as="h3" marginBottom={5}>
        Categories
      </Heading>
      <List.Root
        listStyle="none"
        gap={4}
        display="flex"
        flexDirection={{ sm: "row", md: "column" }}
      >
        {categories.map((category) => (
          <List.Item key={category.slug}>
            <Button
              variant="plain"
              onClick={() => onSelectCategory(category.slug)}
            >
              {category.name}
            </Button>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};
export default CategoriesList;
