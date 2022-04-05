import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DatePipe,UpperCasePipe]
})
export class HomeComponent implements OnInit {
  data:any;
  id:any;
  title="home page";
  date:number=Date.now();
  datePipeString!:any

  category:any=['rakesh','kumar','sharma'];

  constructor(private service:ProductsService,private dpipe:DatePipe) { }

  ngOnInit(): void {

  this.datePipeString=this.dpipe.transform(Date.now(),'yyyy-mm-dd')

  this.service.getAllProducts().subscribe(res=>{

this.data=res;
    })
  }

  delpro(id:number){
    confirm("do you want to delete?")

    this.service.deleteProducts(id).subscribe(res=>{
      if(res){

        alert("delets successfully");
        this.service.getAllProducts().subscribe(res=>{

          this.data=res;
              })
        
      }
    })
  }
}
