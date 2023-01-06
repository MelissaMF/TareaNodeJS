CREATE TABLE public.photo(
    albumId integer NOT NULL,
    id serial,
    title character varying(64) NOT NULL,
    url character varying(64) NOT NULL,
    thumbnailUrl character
    PRIMARY KEY(id)
)