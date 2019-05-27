import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "./user";
import { Utenti } from './mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  LoginForm: FormGroup;
  utenti = Utenti;
  hide: boolean = false;
  nomeUtenteOnline: string = null;
  cognomeUtenteOnline: string = null;
  username:string = null;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'username': ['username', Validators.required], 'password': ['12345678', Validators.required], 'email': ['example@email.com', Validators.compose([Validators.required, Validators.email])], 'telefono': ['3333333333', Validators.required]});
    this.LoginForm = fb.group({'username': ['username', Validators.required], 'password': ['12345678', Validators.required]});
  }

    toggleVar(){
      if(!this.hide){
        this.hide = true;
        document.getElementById("btnLogin").innerHTML = "Registrazione";
        document.getElementById("loginEffettuato").style.display = "none";
      }
      else {
        this.hide = false;
        document.getElementById("btnLogin").innerHTML = "Login";
      }
    }

    onSubmit(): boolean {

      if(this.myForm.valid){
        let utente : User = new User();
        utente.nome = this.myForm.controls['nome'].value;
        utente.cognome = this.myForm.controls['cognome'].value;
        utente.username = this.myForm.controls['username'].value;
        utente.password = this.myForm.controls['password'].value;
        utente.email = this.myForm.controls['email'].value;
        utente.telefono = Number(this.myForm.controls['telefono'].value);
        this.utenti.push(utente);
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    login(): boolean {
      if(this.LoginForm.valid){
        let userFound = false;
        for(let i of this.utenti){
          if(this.LoginForm.controls['username'].value == i.username){
            if(this.LoginForm.controls['password'].value == i.password){
              userFound = true;
              this.cognomeUtenteOnline = i.cognome;
              this.nomeUtenteOnline = i.nome;
              this.username = i.username;
              document.getElementById("loginEffettuato").style.display = "block";
              break;
            }
          }
        }
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }
}
