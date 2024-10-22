import React from 'react'

const Stats = ({ items }) => {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round(numPacked / numItems * 100);
    return (
        <>
            <footer className='stats'>

                <em> {percentage == 100 ? "Everything is Packed You are Ready to Go ✈" :
                    `💼 you have ${numItems} items on your list, and you packed already ${numPacked} items (${percentage}%)  `
                }
                </em>
            </footer>
        </>
    )
}

export default Stats