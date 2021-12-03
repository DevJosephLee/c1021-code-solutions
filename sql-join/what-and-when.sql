select "releaseYear",
       "genres"."name" as "genre"
from   "films"
join   "filmCategory" using ("filmId")
join   "genres" using ("genreId")
where  "title" = 'Boogie Amelie';
