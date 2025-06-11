export enum MainRoute {
  // Non-login
  Login = 'dang-nhap',
  LoginOTP = 'dang-nhap-otp',
  LoginPasswordExpired = 'dang-nhap-het-han-mk',
  LoginVerifyMb = 'dang-nhap-xac-thuc-mb',

  // In-Login
  Home = '',
  ChangePassword = 'doi-mat-khau',
  Account = 'tai-khoan',

  // SETTINGS
  Settings = 'cai-dat',
  ChangePasswordSettings = 'doi-mat-khau',

  // Account Children
  AccountPayment = 'tai-khoan-thanh-toan',
  AccountDeposit = 'tien-gui',
  AccountLoan = 'vay',
  AccountLoanStatement = 'sao-ke',
  TransactionDetail = 'chi-tiet-giao-dich',

  // Transfer
  Transfer = 'chuyen-tien',
  DomesticTransfer = 'chuyen-tien-khac-chu',
  SameOwnerTransfer = 'chuyen-tien-cung-chu',
}
