import'./welcom.css';
export function Welcom(props){
    
    return (
        <div>
<h1>
    Hello, {props.name}
</h1>
<p>
    Age: {props.age}
</p>
        </div>
    );
}