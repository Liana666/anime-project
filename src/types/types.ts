export type InitialStateUsersType = {
    email: string | null
}

export type FormContainerType = {
    btnValue: string
    handleSubmit: (email: string, password: string) => void 
}

export type FormType = {
    btnValue: string
    email: string
    emailError: string
    password: string
    passwordError: string
    formValid: boolean
    passwordActive: boolean
    emailActive: boolean
    handleSubmit: (email: string, password: string) => void 
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}