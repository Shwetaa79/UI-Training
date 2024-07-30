import React from 'react';

const ListWithMockData = ({ data, handleClick }) => {
    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.id} - {item.first_name} {item.last_name}
                        <a
                            onClick={() => {
                                console.log("email link clicked");
                                handleClick(item.email);
                            }}
                        >
                            {item.email}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListWithMockData;
