export class Comic {
    "title": string;
    "issue": number;
    "grade": number;
    "buyer": string;
    "note": string;
    "date": string;
    "seller": string;
    "price": number;
    "goodDate": boolean;
    constructor(
        title: string,
        issue: number,
        grade : number,
        buyer : string,
        note : string,
        date : string,
        seller : string,
        price : number,
        goodDate : boolean
    ) {
        this.title = title;
        this.issue = issue;
        this.grade = grade;
        this.buyer = buyer;
        this.note = note;
        this.date = date;
        this.seller = seller;
        this.price = price;
        this.goodDate = goodDate;
    }
  }
  
  