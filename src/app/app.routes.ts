
// export const routes: Routes = [
//   {
//     path: '',
//     component: ,
//     children: [
//       {
//         path: '',
//         redirectTo: MainRoute.Home,
//         pathMatch: 'full',
//       },
//       {
//         path: MainRoute.Home,
//         loadComponent: () =>
//           import('@pages/home/home.component').then((c) => c.HomeComponent),
//         data: {
//           preload: true,
//           breadcrumb: 'breadcrumb.trang_chu',
//           pageTitle: {
//             nameEn: 'Home',
//           },
//         },
//       },
//       {
//         path: MainRoute.Account,
//         loadComponent: () =>
//           import('@pages/account/account.component').then((m) => m.AccountComponent),
//         data: {
//           preload: true,
//           breadcrumb: 'breadcrumb.tai_khoan',
//           pageTitle: {
//             name: 'Tài khoản',
//             nameEn: 'Components',
//           },
//         },
//       },
//       {
//         path: MainRoute.Account,
//         loadChildren: () =>
//           import('@pages/account/account.routes').then((m) => m.accountRoute),
//         data: {
//           breadcrumb: null,
//           preload: true,
//         },
//       },
//       {
//         path: MainRoute.Transfer,
//         loadChildren: () =>
//           import('@pages/transfer/transfer.routes').then((m) => m.transferRoute),
//         data: {
//           breadcrumb: null,
//           preload: true,
//         },
//       },
//       {
//         path: MainRoute.Settings,
//         loadChildren: () =>
//           import('@pages/setting/setting.routes').then((m) => m.settingsRoute),
//         data: {
//           preload: true,
//           breadcrumb: 'breadcrumb.cai_dat',
//         },
//       },
//       {
//         path: 'component',
//         loadComponent: () =>
//           import('@pages/demo/demo.component').then((m) => m.DemoComponent),
//         data: {
//           breadcrumb: null,
//           pageTitle: {
//             name: 'Thư viện',
//             nameEn: 'Components',
//           },
//         },
//       },
//     ],
//   },
//   {
//     path: '',
//     component: NonLoginComponent,
//     // canActivate: [LoginGuard],
//     children: [
//       {
//         path: MainRoute.Login,
//         loadComponent: () =>
//           import('@pages/auth/login/login.component').then(
//             (c) => c.LoginComponent
//           ),
//         data: {
//           preload: true,
//         },
//       },
//       {
//         path: MainRoute.LoginOTP,
//         loadComponent: () =>
//           import('@pages/auth/login-otp/login-otp.component').then(
//             (c) => c.LoginOtpComponent
//           ),
//         data: {
//           preload: true,
//         },
//       },
//       {
//         path: MainRoute.LoginPasswordExpired,
//         loadComponent: () =>
//           import('@pages/auth/login-password-expired/login-password-expired.component').then(
//             (c) => c.LoginPasswordExpiredComponent
//           ),
//         data: {
//           preload: true,
//         },
//       },
//       {
//         path: MainRoute.LoginVerifyMb,
//         loadComponent: () =>
//           import('@pages/auth/login-verify-mb/login-verify-mb.component').then(
//             (c) => c.LoginVerifyMbComponent
//           ),
//         data: {
//           preload: true,
//         },
//       },
//     ],
//   },
//   { path: '**', redirectTo: MainRoute.Home },
// ];
