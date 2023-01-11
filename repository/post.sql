CREATE TABLE public.post(
    postId integer NOT NULL,
    id serial,
    title text NOT NULL,
    body text NOT NULL,
    PRIMARY KEY(id)
)