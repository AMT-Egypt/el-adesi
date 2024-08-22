export interface UserState {
    searchValue: string,
    filterValue: string,
    typeService: string,
    delete: boolean
}

export type typeState = {
    user: UserState
}