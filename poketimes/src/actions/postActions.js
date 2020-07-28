// ACTION CREATORS - COMES IN HANDY WHEN DEALING WITH A LOT OF DIPATCHES

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id  //or just use 'id' because both have the same names.
    }
}
