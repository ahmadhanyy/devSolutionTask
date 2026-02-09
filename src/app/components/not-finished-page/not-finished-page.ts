import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-finished-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-finished-page.html',
  styleUrls: ['./not-finished-page.scss'],
})
export class NotFinishedPage {}
