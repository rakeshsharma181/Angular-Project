import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name!:string;
  designation!:string;
  address!:string;
  salary!:string;
  id!:number

  constructor(private service: ProductsService, private active: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.params['id'];
    this.service.getProductsById(this.id).subscribe(res => {
      this.name = res.name;
      this.designation = res.designation;
      this.address = res.address;
      this.salary = res.salary;

    })

  }
editpro(){

  let data={name:this.name,designation:this.designation,address:this.address,salary:this.salary};

  this.service.editProduct(this.id,data).subscribe(res=>{

    if(res){

      this.router.navigate(['']);
    }
  })

}
}
