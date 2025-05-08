export class Model {
    userName: string | undefined;
    userPassword: string | undefined;
    // confirm_password: string | undefined;
    // otp: string | undefined;
    // otP_for:string | undefined;
}
//#region  home page 
export interface Data_model {
    sno:number;
    url: string;
    content_Registration_Id: string;
    attachment_Id: string;
    caption: string;
    content_Discription: string;
    subject: string;
    content_Subject: string;
    content_Publising_Date: string;
    expiry_Date_of: string;
    expiry_DateOnNotice_Board: string;
    displayNew: string;

    

   

  }
  export interface GetMostVisitedContentList {
      url: string
      content_Registration_Id: string
      content_Subject: string
      content_Publising_Date: string
      expiry_DateOnNotice_Board: string
      date_timestamp: string
      contentCategoryName: string
  }
  export interface ContentAttachment {
    sno:number;
    fileName: string;
    filePath: any;
    caption: string;
    displayNew: string;
  }
  export interface ContentHeader {
    content_Registration_Id:string;
    content_Discription: string;
    content_Subject: any;
    contentCategoryName: string;
     // {
  //   "content_Registration_Id": "201408000001",
  //   "content_Discription": "Results After Interview Held On 08-08-2013 for the post of General Manager (Admin),Deputy Manager(Purchase &amp;amp;amp; Operation),Bio medical Engineer,Tender &amp;amp;amp; Purchase Officer",
  //   "content_Subject": "Results After Interview Held On 08-08-2013",
  //   "contentCategoryName": "Recruitment Result"
  // }
  }
//#endregion

