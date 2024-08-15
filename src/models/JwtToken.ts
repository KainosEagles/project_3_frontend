export enum UserRole {
    HR = 1,
    MANAGEMENT = 2,
    SALES = 3,
    DELIVERY = 4,
    TEAMLEAD = 5
}

export type JwtToken = {
    Role: UserRole
}