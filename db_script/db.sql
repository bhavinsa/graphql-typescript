--
-- PostgreSQL database dump
--

-- Dumped from database version 10.8
-- Dumped by pg_dump version 10.8

-- Started on 2019-06-14 14:50:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2801 (class 0 OID 0)
-- Dependencies: 2800
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 2 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2803 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 2804 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


--
-- TOC entry 198 (class 1255 OID 16422)
-- Name: get_employees(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_employees() RETURNS TABLE(id integer, name character varying, company_id integer, designation_id integer, created timestamp with time zone, enable boolean)
    LANGUAGE plpgsql
    AS $$
BEGIN
   RETURN QUERY
   select * from employees where employees."enable" = true;
END
$$;


ALTER FUNCTION public.get_employees() OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16405)
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    company_id integer NOT NULL,
    designation_id integer NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    enable boolean NOT NULL
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- TOC entry 2794 (class 0 OID 16405)
-- Dependencies: 197
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employees (id, name, company_id, designation_id, created, enable) FROM stdin;
1	Sam	1	1	2019-06-14 14:21:37.891546+05:30	t
2	John	2	2	2019-06-14 14:21:59.517334+05:30	t
\.


--
-- TOC entry 2672 (class 2606 OID 16409)
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


-- Completed on 2019-06-14 14:50:00

--
-- PostgreSQL database dump complete
--

