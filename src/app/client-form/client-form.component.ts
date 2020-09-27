import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../interfaces/client.interface';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})

export class ClientFormComponent implements OnInit {
  public client:Client = {} as Client;
  public isConfPasswordValid = true;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkPasswordConfirmation(): boolean{
    if(this.client.password !== this.client.password_conf)
      this.isConfPasswordValid = false;
    else
      this.isConfPasswordValid = true;

    return this.client.password === this.client.password_conf;
  }

  onSubmit(){
    if(this.checkPasswordConfirmation()){
      this.router.navigate(['/client-recap'], {queryParams: this.client});
    }
  }

}
