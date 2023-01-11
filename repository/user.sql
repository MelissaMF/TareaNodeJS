CREATE TABLE public.user(
    id serial,
    name character varying(64) NOT NULL,
    username character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    street character varying(64) NOT NULL,
    suite character varying(64) NOT NULL,
    city character varying(64) NOT NULL,
    zipcode character varying(64) NOT NULL,
    lat character varying(64) NOT NULL,
    lng character varying(64) NOT NULL,
    phone character varying(64) NOT NULL,
    website character varying(64) NOT NULL,
    nameCompany character varying(64) NOT NULL,
    catchPrase character varying(64) NOT NULL,
    bs character varying(64) NOT NULL,
    PRIMARY KEY(id)
 )