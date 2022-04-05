import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name!:string;
  designation!:string;
  address!:string;
  salary!:string;


  constructor(private service:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }

  addpro(){
let data={name:this.name,designation:this.designation,address:this.address,salary:this.salary}

    this.service.addProducts(data).subscribe(res=>{
      if(res){
        console.log(res);
        this.router.navigate(['']);
      }
    })
  }

}
