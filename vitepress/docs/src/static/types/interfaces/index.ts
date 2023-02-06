export interface ISocialLinks {
    icon: string,
    link: string,
}

export interface IContributors {
    name: string,
    avatar?: string,
    title?: string,
    links: ISocialLinks[],
}

export interface IDevRoadMapObject {
    label: string,
    link?: string,
}

export interface IDevRoadMap {
    state: boolean,
    object: IDevRoadMapObject[],
}

export interface IFAQ {
    question: string,
    answer: string,
    hyper_link: string,
    link_description: string
}
