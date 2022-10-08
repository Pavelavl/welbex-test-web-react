
create TABLE test_table(
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    name VARCHAR(255) NOT NULL,
    count INTEGER,
    distance INTEGER
);

INSERT into test_table (date, name, count, distance) values ('2021-01-01', 'Ivan', 2, 100), ('2022-09-01', 'Petr', 0, 100), ('2022-01-01', 'Ksenia', 22, 100123), ('2022-10-01', 'Welbex', 1231232, 31231230);