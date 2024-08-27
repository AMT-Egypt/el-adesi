export interface UserState {
    searchValue: string,
    filterValue: string,
    typeService: string,
    delete: boolean
}

export interface UserInfo {
    blocked: boolean,
    confirmed: boolean,
    createdAt: string,
    email: string,
    id: null | number,
    provider: string,
    updatedAt: string,
    username: string
}

export type typeState = {
    user: UserState,
    userInfo: UserInfo
}