export class PhoneCaptcha {
    phoneNumber: string;
    captcha: string;
    $key?: string;

    constructor(obj?: any) {
        if (obj && obj.$key) {
            this.phoneNumber = obj.phoneNumber;
            this.captcha = obj.captcha;
            this.$key = obj.$key;
        }
    }
}