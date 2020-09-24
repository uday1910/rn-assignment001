export const SAVE_NAME = 'SAVE_NAME';
export const REMOVE_NAME = 'REMOVE_NAME';

export const saveName = (text) => {
    return {
        type: SAVE_NAME,
        userName: text
    };
};

export const removeName = () => {
    return {
        type: REMOVE_NAME,
        userName: ''
    };
};