import {AppProduct} from "./src/components/AppProduct/AppProduct.tsx";


export const App = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", gap: "2vh"}}>
            {/*<MiPrimerComponent text={"Texto desde propiedades"} color={"red"} fontSize={5}/>*/}
            {/*<ComponentCounter/>*/}
            {/*<ComponentUseEffect/>*/}
            {/*<FormComponent/>*/}
            <AppProduct/>
        </div>
    )
}