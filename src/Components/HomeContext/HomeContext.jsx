import React, {createContext, useState} from "react";

//lets create context
export const HomeContext = createContext();

//now lets import home data
import { properties } from "../../data";

//lets create hoemcontext provider
const HomeContextProvider = ({children}) => {
    const [homes, setHomes] = useState(properties);
    return <HomeContext.Provider value={{homes}}>
        {children}
    </HomeContext.Provider>
};

export default HomeContextProvider;
