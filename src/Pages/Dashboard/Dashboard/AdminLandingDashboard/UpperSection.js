import React from 'react';

const UpperSection = ({ detail }) => {
    return (
        <div>
            <div className={detail.className}>
                <div>
                    <div>

                    </div>
                    <div>
                        <p className='font-medium text-black my-2'>{detail.title}</p>
                        <h4 className='text-5xl font-bold text-accent'>{detail.value}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpperSection;