import React from "react";
function Extra(props){
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
           {props.def}
          </dd>
        </div>
    );
}

export default Extra;