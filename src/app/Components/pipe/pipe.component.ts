import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  nameSearch:string='';

  data:any=[
    
    {"fname":"Rakesh","lname":"sharma","email":"rk@gmail.com"},
    {"fname":"ashok","lname":"joshi","email":"rk@gmail.com"},
    {"fname":"boby","lname":"singh","email":"rk@gmail.com"},
    {"fname":"zeel","lname":"choudhary","email":"rk@gmail.com"},
    {"fname":"honey","lname":"kumar","email":"rk@gmail.com"}
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
