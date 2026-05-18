update hotel_accounts
set account_status = 'paused'
where subscription_active is false
  and account_status = 'active';
