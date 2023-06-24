import React from 'react';
import Emoji from './Emoji';
import Enames from './Enames';
import Emeaning from './Emeaning';

const Entry = (props) => {

  return (
    <div className="term">
          <dt>
            <Emoji emoji={props.emoji}/>
            <Enames name={props.name} />
          </dt>
          <dd>
            <Emeaning meaning={props.meaning} />
          </dd>
        </div>
  )
}

export default Entry