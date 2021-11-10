import ExampleUI from "./example.presenter";
export default function Example(props){
    return(
        <ExampleUI isEdit={props.isEdit}/>
    )
}