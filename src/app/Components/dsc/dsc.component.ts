import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsc',
  templateUrl: './dsc.component.html',
  styleUrls: ['./dsc.component.css']
})
export class DscComponent implements OnInit {

  data:any=[
    
    'Rakesh','Ajay','Bobby','Pankaj','Joshi'   
      
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
