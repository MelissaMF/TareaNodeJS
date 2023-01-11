CREATE TABLE public.photo(
    albumId integer NOT NULL,
    id serial,
    title text NOT NULL,
    url text NOT NULL,
    thumbnailUrl text,
    PRIMARY KEY(id)
)