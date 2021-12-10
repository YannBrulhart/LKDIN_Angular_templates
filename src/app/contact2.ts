export class Contact2 {
    constructor(
        public first_name : string,
        public last_name : string,
        public email : string,
        public gender : string,
        public company? : string,
        ){}   
}

export const contacts: Contact2[] = [{
    "first_name": "Yann",
    "last_name": "Brulhart",
    "email": "yann@bubusissi.ch",
    "gender": "male",
    "company": "LinkedIn"
},
{
    "first_name": "Sissi",
    "last_name": "Brulhart",
    "email": "sissi@bubusissi.ch",
    "gender": "female",
    "company": "Microsoft"
}]

export const companies = ['LinkedIn', 'Microsoft', 'Meggitt', 'Other'];