

export default interface Euser {
        id: number;
        reference: string;
        username: string;
        email: string;
        password: string;
        address: string;
        countState: string;
        gender: string;
        biNumber: string;
        phoneNumber: string;
        emailVerified: boolean;
        verificationCode: string;
        resetCode: string;
        createdAt: string;
        biUrl: string;
        profileImgUrl: string | null;
        nifUrl: string | null;
        alvaralUrl: string | null;
        certidaoComercialUrl: string | null;
        token: string;
}