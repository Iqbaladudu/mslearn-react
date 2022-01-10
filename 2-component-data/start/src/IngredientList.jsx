import ReactDOM from 'react-dom'
import './IngredientList.css'
import React from 'react'

function IngredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} className={ ingredient.prepared ? 'prepared' : '' }>
                { ingredient.name }
            </li>
        )
    })

    return (
        <ul>
            { ingredientListItems }
        </ul>
    )
}

export default IngredientList