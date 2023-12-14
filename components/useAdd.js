import React from 'react'

const useAdd = (arr, id, newData) => {
    if (arr.id === id) {
        arr.items.push(newData);
        return arr;
    }

    if (arr.items) {
        const newVal = arr.items.map((item) => {
            func(item, id, newData);
        });
        return { ...arr, items: newVal };
    }
    return arr;
}
export default useAdd;