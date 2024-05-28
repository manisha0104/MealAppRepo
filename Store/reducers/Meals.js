import { MEALS } from "../../Data/Dummy-data";
import { TOGGLE_FAVORITE } from "../actions/MealsAction";
const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[],
}
const MealsReducer =(state= initialState, action)=>{
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favouriteMeals.findIndex(meal=>meal.id === action.meadId);
            if(existingIndex >= 0){
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favouriteMeals: updatedFavMeals };
            }else{
                const meal= state.meals.find(meal=>meal.id === action.mealId);
                return{ ...state, favouriteMeals:state.favouriteMeals.concat(meal)}
            }
    
        default:
            return state;
    }
   
}
export default MealsReducer;