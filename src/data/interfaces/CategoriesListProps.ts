export interface CategoriesListProps {
    categories: string[];
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CategoryStateProps {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}