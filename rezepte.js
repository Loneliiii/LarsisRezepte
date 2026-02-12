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
        titel: "Pizza Margherita (Mit fertigem Teig)",
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
        // HIER IST DEIN NEUES BILD:
        bild: "knuffi_question.jpg",
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

    "pizzateig": {
        titel: "Pizzateig (Selbstgemacht)",
        bild: "https://images.unsplash.com/photo-1568567663699-3eb161fb40be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        zeit: "50 Min.",
        portionen: "2-3 Pizzen / 1 Blech",
        kategorie: "Vegetarisch, Vegan",
        zutaten: [
            "500g Mehl",
            "1/2 Würfel frische Hefe (ca. 20g)",
            "280ml lauwarmes Wasser",
            "3 EL Olivenöl (plus etwas mehr zum Kneten)",
            "1/2 TL Zucker",
            "1 TL Salz",
            "Prise Pfeffer"
        ],
        zubereitung: [
            { titel: "Hefe aktivieren", text: "Hefe in eine große Schüssel zerbröseln. Zucker und lauwarmes Wasser hinzufügen. Mit einem Schneebesen verrühren, bis keine Krümel mehr zu sehen sind. 10 Minuten stehen lassen." },
            { titel: "Teig ansetzen", text: "Nach den 10 Minuten das Olivenöl untermischen. Nun einen Großteil des Mehls, Salz und Pfeffer hinzufügen und anfangen zu kneten." },
            { titel: "Kneten", text: "Alles gut durchkneten. Dabei kann noch etwas Olivenöl hinzugefügt werden, damit der Teig eine schöne, geschmeidige Form annimmt und nicht klebt." },
            { titel: "Gehen lassen", text: "Die Schüssel mit einem Küchentuch abdecken und an einem warmen Ort 30 Minuten gehen lassen." },
            { titel: "Backen", text: "Der Teig ist nun fertig! Er kann nach Belieben verkleinert (runde Pizzen) oder im Ganzen ausgerollt werden. Backzeit bei ca. 220°C liegt meist zwischen 10-15 Minuten, je nach Ofen und Belag." }
        ]
    },

    "bbq_burritos": {
        titel: "BBQ Burritos mit Hackfleisch",
        bild: "https://images.unsplash.com/photo-1671572579845-52270341950f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        zeit: "15 Min.",
        portionen: "2 Personen",
        kategorie: "Hauptgericht, Schnell",
        zutaten: [
            "250g Hackfleisch (gemischt)",
            "4 Weizentortillas",
            "380g schwarze Bohnen (Dose)",
            "120g Salatherz (Romana)",
            "1 Zwiebel",
            "50ml Buttermilch-Zitronen-Dressing",
            "40ml BBQ-Soße",
            "35g Tomatenmark",
            "Gewürze: Salz, Pfeffer, Chili/Piri-Piri"
        ],
        zubereitung: [
            { titel: "Schnippeln", text: "Zwiebel und Salat in feine Streifen schneiden. Die Bohnen einmal kurz im Sieb abspülen, bis es nicht mehr schäumt. Dressing in einer Schüssel schon mal mit dem Salat vermischen." },
            { titel: "Anbraten", text: "Pfanne heiß machen (brauchst kein Fett). Hackfleisch mit den Zwiebeln rein und schön braun braten (ca. 4-5 Min)." },
            { titel: "Würzen & Soße", text: "Jetzt kommt Geschmack dran: Tomatenmark, Bohnen, die Hälfte der BBQ-Soße und etwas Chili-Gewürz dazu. Kurz mitbraten und mit Salz & Pfeffer abschmecken." },
            { titel: "Rollen", text: "Tortillas kurz warm machen (Mikrowelle oder Pfanne). Hack-Mischung drauf, Salat drüber, Seiten einklappen und fest aufrollen. Die restliche BBQ-Soße gibt's als Dip dazu." }
        ]
    }

};
