export const SAVE_NAME = 'SAVE_NAME';
export const REMOVE_NAME = 'REMOVE_NAME';

export type Action = { 
    type: string,
    userName: string
}

export const saveName = (text: string): Action => {
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