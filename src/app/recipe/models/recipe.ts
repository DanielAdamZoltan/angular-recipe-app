export interface Recipe{
    id: number;
    title: string;
    uploaderId: number;
    imagePath: string;
    time: number;
    portion: number;
    price: number;
    difficulty: number;
    categoryId: number;
    cuisineId: number;
    partOfTheDay: number;
    season: number;
    recipeIngredientId: number;
    recipeStepId: number;
}