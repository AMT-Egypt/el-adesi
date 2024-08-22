export interface UserState {
    searchValue: string,
    filterValue: string,
    typeService: string
}

export type typeState = {
    user: UserState
}