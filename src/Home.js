const Home = () => {
    const handleClick = () => {
        console.log('Hello ninjas')
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name)
    }


    // return ( 
    //     <div className="home">
    //         <h1>Homepage</h1>
    //         <button onClick={handleClick}>Click Me</button>
    //         <button onClick={() => {
    //             handleClickAgain('david');
    //         }}>Click Me Again</button>
    //     </div>
    //  );

    return ( 
        <div></div>
     );
}
 
export default Home;