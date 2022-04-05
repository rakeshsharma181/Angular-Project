import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asc',
  templateUrl: './asc.component.html',
  styleUrls: ['./asc.component.css']
})
export class AscComponent implements OnInit {


  data:any=[
    
'Rakesh','Ajay','Bobby','Pankaj','Joshi'   
  
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
