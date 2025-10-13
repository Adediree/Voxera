export type LoginRequest = {
    deviceId?: string,
    latitude?: string,
    longitude?: string,
    userEmail: string,
    userPassword: string
    // otp: string,
}

export const loginRequestInit: LoginRequest = {
    deviceId: "",
    latitude: "",
    longitude: "",
    userEmail: "",
    userPassword: ""
    // otp: "",
}
