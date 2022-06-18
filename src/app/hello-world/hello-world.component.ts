import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  val: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  myFunction(): void { 
    alert('Congratulations! You have now figured out One Way Data Binding!'); 
}

}
