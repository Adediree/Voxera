export type ChangePasswordRequest = {
    oldPassword: string,
    userPassword: string,
    userEmail: string
}

export const changePasswordRequestInit: ChangePasswordRequest = {
    oldPassword: "",
    userPassword: "",
    userEmail: "",
}
