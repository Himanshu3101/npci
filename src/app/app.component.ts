import { Component, OnInit } from '@angular/core';
import {MandateDetailsService} from './MandateDetailsService.service';
import {mandateDetails} from './mandateDetails';
import { mandatebody } from './mandatebody';
import { stringify } from 'querystring';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
public show:boolean = true;
public hide:boolean = false;
public checked = "";
public disable = "";

  constructor(private _MandateDetailsService : MandateDetailsService){
  }

  // lstMandate:mandateDetails[];
  objMandate:mandateDetails;

  entityBusinessCode:string;
  entityName:string;
  ifsc:string;
  sponsorBankName:string;
  Refrence1:string;
  customerName:string;
  customerBankName:string;
  AccNo:string;
  customerIFSC:string;
  fromDate:string;
  toDate:string;
  amtRupees:string;
  phoneNumber:string;
  netBanking:string;
  debitCard:string;

  ngOnInit(){

    // this._MandateDetailsService.getcomments()
    // .subscribe(
    //   data=>{
    //     this.lstMandate = data;
    //   }
    // );

    // this._MandateDetailsService.getcommentsbyparam()
    // .subscribe(
    //   data=>{
    //     this.lstMandate = data;
    //   }
    // );

    var oMandate = new mandatebody();
   
    oMandate.MandateId = '1';
    oMandate.QueryType = "XMLMandate";

    this._MandateDetailsService.post(oMandate)
    .subscribe(
      data=>{
        this.objMandate = data;
        this.entityBusinessCode=this.objMandate[0].entityBusinessCode;
        this.entityName=this.objMandate[0].entityName;
        this.ifsc=this.objMandate[0].ifsc;
        this.sponsorBankName=this.objMandate[0].sponsorBankName;
        this.Refrence1=this.objMandate[0].refrence1;
        this.customerName=this.objMandate[0].customerName;
        this.customerBankName=this.objMandate[0].customerBankname;
        this.AccNo=this.objMandate[0].acNo;
        this.customerIFSC=this.objMandate[0].customerIFSC;
        this.fromDate=this.objMandate[0].fromDate;
        this.toDate=this.objMandate[0].todate;
        this.amtRupees=this.objMandate[0].amountRupees;
        this.phoneNumber=this.objMandate[0].phoneNumber;
        this.netBanking=this.objMandate[0].netBanking;
        this.debitCard=this.objMandate[0].debitCard;
        // console.log('objmandate',this.objMandate);
        this.selectionSet();
      }
    )
    console.log();
    
    
  }

  selectionSet(){
  if(this.debitCard=="1" && this.netBanking=="1"){
      this.checked="checked";
    }else if(this.netBanking=="1"){
      this.checked="!checked";
     
      
    }else if(this.debitCard=="1"){
      this.checked="checked";
      this.disable="disable";
    }
  }
  
 
  parmeterNPCIsend(){
    if(this.debitCard=="1" && this.netBanking=="1"){
      this.checked="checked";
    }else if(this.netBanking=="1"){
      this.checked="!checked";
    }else if(this.debitCard=="1"){
      this.checked="checked";
    }
    alert("aa");
  }

  showHide(){
	  this.show = false;
	   this.hide = true;
  }
}
