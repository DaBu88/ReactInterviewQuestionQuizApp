const GoodAnswerComponents = (props) => {
    console.log(props);
return (  
    <ul>
        <li>{props['value'][0]}</li>
    </ul>
 );
}
 
export default GoodAnswerComponents;


// props["value"].map((component) => (
//     <li key={component}>{component}</li>
// ))