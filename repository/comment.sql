CREATE TABLE public.comment (
    postId integer NOT NULL,
    id serial,
    name character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    body text NOT NULL,
    PRIMARY KEY(id)
);