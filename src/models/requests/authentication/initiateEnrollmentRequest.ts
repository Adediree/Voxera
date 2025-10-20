export type InitiateEnrollmentRequest = {
  userEmail: string;
  userName: string;
  userPassword: string;
  userRoleId: number;
  userStatus: string;
};

export const initiateEnrollmentRequestInit: InitiateEnrollmentRequest = {
  userEmail: "",
  userName: "",
  userPassword: "",
  userRoleId: 0,
  userStatus: "",
};
