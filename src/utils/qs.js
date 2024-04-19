import qs from "qs";

export function getFlatDataFromQuery(state, flatSize, occupancy) {

    const getFlatData = {
        filters: {
            $and: [
                {
                    ...(state ?
                        { state: { $eq: state } }
                        : {}),
                    ...(flatSize ?
                        { flatSize: { $eq: flatSize } }
                        : {}),
                    ...(occupancy ?
                        { occupancy: { $eq: occupancy } }
                        : {})
                }
            ]
        },
        fields: ['city', 'name', 'state', 'price'],
        populate: 'slides'
    }

    const uri = qs.stringify(getFlatData);
    return decodeURIComponent(uri);
}


export function getFlatDataFromFilter(location) {

    const getFlatData = {
        filters: {
            $or: [{
                city: {
                    $in : location
                }
            }]
        },
        fields: ['city', 'name', 'state', 'price'],
        populate: 'slides'
    }

    const uri = qs.stringify(getFlatData);
    return decodeURIComponent(uri);
}