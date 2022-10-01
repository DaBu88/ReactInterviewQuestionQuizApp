import { useState } from "react";
const Answer = (props) => {
    const [showOrHide, setShowOrHide] = useState('Show');
    function handleToggle() {
        if (showOrHide === 'Show') {
            setShowOrHide('Hide');
        } else {
            setShowOrHide('Show');
        }
    }

    return ( 
        <div className="Answer">
        <button onClick={handleToggle}>
          {showOrHide} Answer
        </button>
      </div>
     );
}
 
export default Answer;