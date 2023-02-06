import type { IDevRoadMap } from '../types/interfaces'

const Completed: IDevRoadMap = {
    state: true,
    object: [
        { label: '' },
    ]
}

const InProgress: IDevRoadMap = {
    state: false,
    object: [
        { label: '' },
    ]
}


const Planned: IDevRoadMap = {
    state: false,
    object: [
        { label: '' },
    ]
}


export { InProgress, Completed, Planned }