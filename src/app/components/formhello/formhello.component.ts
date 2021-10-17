import { Component, OnInit } from "@angular/core";
@Component ({
    selector: 'form-hello',
    styleUrls: ['formhello.component.css'],
    templateUrl: 'formhello.component.html'
})
export class FormHelloComponent implements OnInit {
    constructor()
    {}
    ngOnInit()
    {

    }
    public firstname : string = '';
    public lastname : string = '';
    public IsSayHello : boolean= false;
    public btnSayHello_Click(): void{
        this.IsSayHello=true;
    };
    public alert_Close():void{
        this.IsSayHello= false;
    }
    public btnReset_Click(): void{
        this.firstname= '';
        this.lastname='';
    }
}