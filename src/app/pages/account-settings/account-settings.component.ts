import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private settinService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.settinService.checkCurrentThemeService();
  }

  changeTheme(theme: string): void {
    this.settinService.changeThemeService(theme);
  }


}
