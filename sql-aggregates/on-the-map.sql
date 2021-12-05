select "countries"."name",
       count("cities".*) as "numberOfCities"
from   "cities"
join   "countries" using ("countryId")
group by "countries"."name"
