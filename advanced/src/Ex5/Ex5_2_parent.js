import {React, useState} from 'react'
import Ex5_2_child from './Ex5_2_child'
function Ex5_2_parent() {
    const [data, setData] = useState([]);
    return (
        <div className="App"  >
            <h1>Parent Component </h1>
            {
                data.map((item, index) =>
                {
                    return <li key={index}  style={{ margin: '10px' }}>
                        {item.name} is {item.age} years old , live in {item.city}
                    </li>
                })
            }

            <Ex5_2_child callback={data => setData(data)}/>
        </div>
    );
}

export default Ex5_2_parent;