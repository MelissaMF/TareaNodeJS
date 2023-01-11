CREATE TABLE public.todo(
    userId integer NOT NULL,
    id serial,
    title character varying(64) NOT NULL,
    complete boolean NOT NULL,
    PRIMARY KEY(id)
)