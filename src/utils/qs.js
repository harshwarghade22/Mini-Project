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


export function getFlatDataFromFilter(state, flatSize, occupancy, location) {

    const getFlatData = {
        filters: {
            $and: [{
                ...(state ?
                    { state: { $eq: state } }
                    : {}),
                ...(flatSize ?
                    { flatSize: { $eq: flatSize } }
                    : {}),
                ...(occupancy ?
                    { occupancy: { $eq: occupancy } }
                    : {}),
                city: {
                    $in: location
                }
            }]
        },
        fields: ['city', 'name', 'state', 'price'],
        populate: 'slides'
    }

    const uri = qs.stringify(getFlatData);
    return decodeURIComponent(uri);
}


export function getFlatDataFromId(id) {

    const getFlatData = {
        filters: {
            id: { $eq: id }
        },
        populate: '*'
    }

    const uri = qs.stringify(getFlatData);
    return decodeURIComponent(uri);
}