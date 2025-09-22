
CREATE DATABASE IF NOT EXISTS ogloszenia;
USE ogloszenia;

CREATE TABLE IF NOT EXISTS oferty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tytul VARCHAR(100) NOT NULL,
    opis TEXT NOT NULL,
    firma VARCHAR(100) NOT NULL,
    lokalizacja VARCHAR(100) NOT NULL,
    data_dodania DATE NOT NULL
);

INSERT INTO oferty (tytul, opis, firma, lokalizacja, data_dodania) VALUES
('Programista PHP', 'Tworzenie aplikacji webowych w PHP.', 'TechSolutions', 'Warszawa', '2025-05-01'),
('Front-end Developer', 'React i JavaScript, praca zdalna.', 'WebExperts', 'Kraków', '2025-05-03'),
('Administrator Baz Danych', 'Zarządzanie bazami MySQL.', 'DBPower', 'Wrocław', '2025-04-29'),
('Specjalista SEO', 'Optymalizacja stron internetowych.', 'MarketingPro', 'Poznań', '2025-05-05'),
('UX Designer', 'Projektowanie interfejsów użytkownika.', 'CreativeStudio', 'Warszawa', '2025-05-02');