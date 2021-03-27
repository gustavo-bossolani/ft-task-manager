import { GenericModalService } from './../../shared/generic-modal/services/generic-modal.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private modalService: GenericModalService
  ) { }

  ngOnInit(): void {  }

  logout() {
    const onModalOpened$ = this.modalService.openDialog({
      title: 'Do you want leave?',
      content: 'You can return at any time.',
      negativeButtonLabel: 'No, staay!',
      positiveButtonLabel: 'Go ahead, leave!',
      positiveButtonStyle: 'primary',
      negativeButtonStyle: 'default',
    });

    if (onModalOpened$) {
      onModalOpened$
        .subscribe(isExiting => {
          this.modalService.opened.next(false);
          if (isExiting) {
            this.auth.invalidateToken();
            this.router.navigate(['']);
          }
        });
    }
  }

}
