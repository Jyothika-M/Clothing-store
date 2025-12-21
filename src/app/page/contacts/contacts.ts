import { Component } from '@angular/core';
import { Map } from "../../component/map/map";
import { Form } from "../../component/form/form";

@Component({
  selector: 'app-contacts',
  imports: [Map, Form],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {

}
