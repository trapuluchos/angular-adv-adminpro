import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    customInitFunction();
  }

}
