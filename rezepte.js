const rezeptDaten = {
    "hamburger": {
        titel: "Hamburger / Cheeseburger",
        bild: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "25 Min.",
        portionen: "2 Burger",
        kategorie: "Hauptgericht",
        zutaten: [
            "2 Burger Buns (Brioche)",
            "300g Rinderhack",
            "1 Tomate",
            "1 Kopf Eisbergsalat",
            "1 rote Zwiebel",
            "1 Glas Gewürzgurken",
            "Ketchup, Senf, Burgersauce",
            "Optional: 2-4 Scheiben Käse"
        ],
        zubereitung: [
            { titel: "Vorbereitung", text: "Gemüse waschen. Tomate und Gurken in Scheiben, Zwiebel in Ringe schneiden. Salatblätter abzupfen. Hackfleisch nur mit Salz & Pfeffer würzen und formen." },
            { titel: "Fleisch braten", text: "Patties scharf anbraten. Für Cheeseburger: Nach dem Wenden Käse drauflegen, einen kleinen Schluck Wasser in die Pfanne geben und sofort den Deckel drauf (Geht auch ohne Wasser, einfach den Käse auf dem Patty schmelzen lassen)." },
            { titel: "Buns anrösten", text: "Die aufgeschnittenen Brötchen kurz mit den Schnittflächen in die heiße Pfanne legen. So werden sie knusprig und weichen später durch die Soße nicht so schnell durch." },
            { titel: "Zusammenbau", text: "Brötchenboden, Soße, Salat, Fleisch (ggf. mit Käse), Tomate, Gurke, Zwiebel, Soße, Deckel. Fertig!" },
            { titel: "Tipp", text: "Die Tomatenscheiben leicht salzen für mehr Geschmack!" }
        ]
    },

    "carbonara": {
        titel: "Spaghetti Carbonara",
        bild: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "20 Min.",
        portionen: "2 Personen",
        kategorie: "Hauptgericht",
        zutaten: [
            "250g Spaghetti",
            "100g Speck oder Schinken",
            "3 Eigelb",
            "50g Pecorino oder Parmesan",
            "Viel schwarzer Pfeffer"
        ],
        zubereitung: [
            { titel: "Nudeln", text: "Nudeln im Topf zum kochen bringen." },
            { titel: "Speck", text: "Speck würfeln und in der Pfanne knusprig braten. Herd ausschalten." },
            { titel: "Ei-Mischung", text: "Eigelb mit dem geriebenen Käse und Pfeffer in einer Schüssel verquirlen." },
            { titel: "Finale", text: "Heiße Nudeln direkt aus dem Wasser zum Speck geben. Pfanne vom Herd nehmen (!), Ei-Mischung unterrühren bis es cremig ist." }
        ]
    },

    "pizza": {
        titel: "Pizza Margherita",
        bild: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "40 Min.",
        portionen: "2 Pizzen",
        kategorie: "Hauptgericht, Vegetarisch",
        zutaten: [
            "500g Pizzateig",
            "200ml Tomatensauce",
            "2 Kugeln Mozzarella (oder Reibekäse)",
            "1 Topf frisches Basilikum",
            "Olivenöl"
        ],
        zubereitung: [
            { titel: "Formen", text: "Teig dünn ausrollen oder mit den Händen ziehen." },
            { titel: "Belegen", text: "Mit Tomatensauce bestreichen und Mozzarella darauf verteilen. Weiteren Belag nach Belieben hinzufügen." },
            { titel: "Backen", text: "Bei maximaler Hitze (250°C) ca. 10-12 Minuten backen. Danach frisches Basilikum drauf." }
        ]
    },

    "chili": {
        titel: "Chili con Carne",
        bild: "https://images.unsplash.com/photo-1591266798549-32fa7cd32f45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        zeit: "60 Min.",
        portionen: "4 Portionen",
        kategorie: "Hauptgericht",
        zutaten: [
            "500g Rinderhack",
            "1 Dose Kidneybohnen",
            "1 Dose Mais",
            "1 Dose gehackte Tomaten (400g)",
            "Etwas Tomatenmark",
            "1 große Zwiebel",
            "2 Paprika",
            "Gewürze (Chili, Kreuzkümmel, Pfeffer, Salz)",
            "Optional: 1 Stück Zartbitterschokolade"
        ],
        zubereitung: [
            { titel: "Vorbereitung", text: "Zwiebeln und Paprika klein schneiden." },
            { titel: "Anbraten", text: "Hackfleisch anbraten und etwas später die Zwiebeln und Paprika hinzugeben." },
            { titel: "Kochen", text: "Etwas später Tomaten, Bohnen und Mais dazu. Würzen und mind. 45 Min köcheln lassen." },
            { titel: "Servieren", text: "Dazu passt Reis oder Baguette." },
            { titel: "Geheimtipp", text: "Gegen Ende ein Stück Zartbitterschokolade im Chili schmelzen lassen, das gibt eine tolle Tiefe und Farbe!" }
        ]
    },
    "huhn_suess_sauer": {
        titel: "Nudeln mit Hähnchen Süß-Sauer-Sahne Sauce",
        bild: "https://media.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/recipes/image/643ecb3db8ffbb976d0c4923-3f6fef73-f211d98c.jpg",
        zeit: "25 Min.",
        portionen: "2 Portionen",
        kategorie: "Hauptgericht, Schnell",
        zutaten: [
            "400g Hähnchengeschnetzeltes",
            "250g Nudeln (oder mehr)",
            "1 Glas Süß-Sauer Sauce",
            "100-150ml Becher Schlagsahne",
            "Salz, Pfeffer & Gewürze"
        ],
        zubereitung: [
            { titel: "Nudeln", text: "Wasser für die Nudeln zum Kochen bringen. Sobald die Nudeln im Wasser sind, mit dem Hähnchen weitermachen." },
            { titel: "Hähnchen", text: "Hähnchengeschnetzeltes in einer Pfanne anbraten und schon mal mit Pfeffer und Co. nach Belieben würzen." },
            { titel: "Sauce", text: "Wenn das Fleisch gebraten ist, die Süß-Sauer-Sauce komplett hinzufügen und kurz einziehen lassen. Danach mit Schlagsahne ablöschen und umrühren, bis die Sauce eine cremig-orangene Farbe hat." },
            { titel: "Servieren", text: "Nun die Nudeln in die Sauce kippen (oder andersherum) und servieren. Guten Appetit!" }
        ]
    },

};
