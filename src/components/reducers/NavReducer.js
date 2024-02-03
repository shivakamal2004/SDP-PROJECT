const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Login":
            return "Login";
        case "Registration":
            return "Registration"; 
        case "Profile":
            return "Profile";
        case "Entry":
            return "Entry";
        case "Placement":
            return "Placement";
        default:
            return "Login";
    }
}