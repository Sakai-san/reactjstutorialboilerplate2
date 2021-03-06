// @flow
export const populatePictures = (pictures:Array<Object>):Object => {
    return {
        type: "INITIALIZATION",
        payload: pictures
    };
};

export const removePicture = (id:number):Object => {
    return {
        type: "REMOVE_PICTURE",
        payload: id
    };
};

export const addPicture = (picture:Object):Object => {
    return {
        type: "ADD_PICTURE",
        payload: picture
    };
};