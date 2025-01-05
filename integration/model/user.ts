import Euser from "./entity/Euser";

export default class User {
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

    constructor(userdata: Euser) {
        this.id = userdata.id;
        this.reference = userdata.reference;
        this.username = userdata.username;
        this.email = userdata.email;
        this.password = userdata.password;
        this.address = userdata.address;
        this.countState = userdata.countState;
        this.gender = userdata.gender;
        this.biNumber = userdata.biNumber;
        this.phoneNumber = userdata.phoneNumber;
        this.emailVerified = userdata.emailVerified;
        this.verificationCode = userdata.verificationCode;
        this.resetCode = userdata.resetCode;
        this.createdAt = userdata.createdAt;
        this.biUrl = userdata.biUrl;
        this.profileImgUrl = userdata.profileImgUrl;
        this.nifUrl = userdata.nifUrl;
        this.alvaralUrl = userdata.alvaralUrl;
        this.certidaoComercialUrl = userdata.certidaoComercialUrl;
        this.token = userdata.token;
    }
}