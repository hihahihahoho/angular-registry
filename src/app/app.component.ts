import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from '@components/base/loading/loading.component';
import { ToastComponent } from '@components/base/toast/toast.component';
import { environment } from '@env/environment';
import { LoadingService } from '@services/loading/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pgbank-omni-root',
  imports: [RouterOutlet, CommonModule, ToastComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'pgbank-omni';
  private env = environment;

  private loadingService = inject(LoadingService);
  showLoading$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {
    this.showLoading$ = this.loadingService.getIsLoading();
  }
}
