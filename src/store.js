import {createStore} from 'redux';

const initialState = {
    name:'',
    category: '',
    authorFirstName:'',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME ='UPDATE_AUTHOR_FIRST_NAME'
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS ='ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'


function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_NAME:
            return {...state, name: payload};

        case UPDATE_CATEGORY:
            return {...state, category: payload};

            case UPDATE_AUTHOR_FIRST_NAME: 
            return {...state, authorFirstName: payload};

        case UPDATE_AUTHOR_LAST_NAME:
            return {...state, authorLastName: payload};

        case ADD_INGREDIENTS:
            const newIngredients =[...state.ingredients, payload]
            return {...state, ingredients: newIngredients};

        case ADD_INSTRUCTIONS:
            const newInstructions =[...state.instructions, payload]
            return {...state, instructions: newInstructions}

        case ADD_RECIPE:
            const{
                name,
                category,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions,
            } = state;

            const recipe ={
                name,
                category,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            } 
            const newRecipe =[...state.recipes, recipe]
            return {...state, recipes: newRecipe}
        default: 
        return state
    }
}

export default createStore(reducer);