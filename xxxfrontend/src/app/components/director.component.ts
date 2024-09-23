import { Component } from "@angular/core";
import { directorservice } from "../service/directors.service";
import { Director } from "../models/directors";
import { HttpClient } from "@angular/common/http";


@Component({
    selector: 'app-director',
    standalone: true,
    imports: [],
    templateUrl: './director.component.html',
    styleUrls: ['./director.component.css']
})

export class DirectorComponent {
    
}