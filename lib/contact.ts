export type Inquiry={name:string;email:string;company?:string;service?:string;budget?:string;message:string}
// Swap this for a real email/API provider (Resend, Postmark, route handler...).
export async function submitInquiry(_d:Inquiry):Promise<{ok:boolean}>{await new Promise(r=>setTimeout(r,800));return {ok:true}}
