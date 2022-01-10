import './index.css'
import React from 'react'
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'
import StepComponent from './StepsLists'
// TODO: Import IngredientList


function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces' },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            {todo: 'Add cut potatoes to a pot of heavily salted water.'},
            {todo: 'Bring pot to a boil.'},
            {todo: 'Boil the potatoes until fork tender, about 15-20 minutes.'},
            {todo: 'Strain the potatoes.'},
            {todo: 'Return potatoes to pot.'},
            {todo: 'Add butter, cream, salt, and pepper to taste.'},
            {todo: 'Mash potatoes.'},
            {todo: 'Reseason and add butter and cream as desired.'}
        ]
    }
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={recipe.feedback} />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            <StepComponent steps={recipe.steps} />
        </article>
    )
}

export default App;
