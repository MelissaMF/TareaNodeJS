CREATE TABLE public.post(
    postId integer NOT NULL,
    id serial,
    title character varying(64) NOT NULL,
    body character varying(64) NOT NULL
    PRIMARY KEY(id)
)