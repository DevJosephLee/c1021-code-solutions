-- select "firstName",
--        "lastName",
--        sum("payments"."amount") as "totalAmountSpent"
-- from   "customers"
-- join   "payments" using ("amount")
-- group by "customers"."firstName"
--      and "customers"."lastName"


select sum("amount") as "totalAmountSpent"
from   "payments"
