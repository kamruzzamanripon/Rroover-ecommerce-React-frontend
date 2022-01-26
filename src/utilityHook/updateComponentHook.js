import React,{useState, useEffect} from 'react';

const useUpdateComponentHook = (setRefreshComponent) => {
    const [updateComponent, setUpdateComponent] = useState(false);

    const updateComponentEvent = ()=>{
        setUpdateComponent(updateComponent === false ? true : false)
        setRefreshComponent && setRefreshComponent()
        //setUpdateComponent(false)
    }

    useEffect(()=>{
        setUpdateComponent(false )

    },[updateComponent])

    console.log("update Component", updateComponent)
    return {
        updateComponent,
        updateComponentEvent
    };
};

export default useUpdateComponentHook;
