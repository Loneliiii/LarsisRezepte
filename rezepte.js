const rezeptDaten = {
    "hamburger": {
        titel: "Klassischer Hamburger",
        bild: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "20 Min.",
        portionen: "2 Stück",
        kategorie: "Hauptgericht",
        zutaten: [
            "2 Burger Buns",
            "300g Rinderhack",
            "Salatblätter",
            "Tomatenscheiben",
            "Zwiebelringe",
            "Ketchup & Senf"
        ],
        zubereitung: [
            { titel: "Vorbereitung", text: "Hackfleisch nur mit Salz und Pfeffer würzen und zu Patties formen." },
            { titel: "Braten", text: "Fleisch in der heißen Pfanne von beiden Seiten scharf anbraten (ca. 3 Min pro Seite)." },
            { titel: "Belegen", text: "Brötchen aufschneiden und mit Fleisch, Salat und Soßen belegen." },
            { titel: "Tipps", text: "Du kannst die Bun hälften auch kurz in der Pfanne mit anbraten, so ziehen diese etwas vom Fett mit auf, bekommt Geschmack und wird knusprig." }
        ]
    },

    "cheeseburger": {
        titel: "Saftiger Cheeseburger",
        bild: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "25 Min.",
        portionen: "2 Stück",
        kategorie: "Hauptgericht",
        zutaten: [
            "2 Brioche Buns",
            "300g Rinderhack",
            "2 Scheiben Cheddar Käse",
            "Gewürzgurken",
            "Burgersauce"
        ],
        zubereitung: [
            { titel: "Vorbereitung", text: "Hackfleisch nur mit Salz und Pfeffer würzen und zu Patties formen." },
            { titel: "Braten", text: "Fleisch braten. Nach dem Wenden sofort den Käse auf das Fleisch legen." },
            { titel: "Schmelzen", text: "Einen Spritzer Wasser in die Pfanne geben und Deckel drauf, damit der Käse schmilzt." },
            { titel: "Zusammenbau", text: "Bun, Sauce, Gurken, Fleisch mit Käse, Deckel. Fertig!" },
            { titel: "Tipps", text: "Du kannst die Bun hälften auch kurz in der Pfanne mit anbraten, so ziehen diese etwas vom Fett mit auf, bekommt Geschmack und wird knusprig." }
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
            { titel: "Finale", text: "Heiße Nudeln direkt aus dem Wasser zum Speck geben. Pfanne vom Herd nehmen, Ei-Mischung unterrühren bis es cremig ist." }
        ]
    },

    "pizza": {
        titel: "Pizza Margherita",
        bild: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "40 Min.",
        portionen: "2 Pizzen",
        kategorie: "Vegetarisch",
        zutaten: [
            "500g Pizzateig",
            "200ml Tomatensauce",
            "2 Kugeln Mozzarella oder Geriebener Mozarella",
            "Frisches Basilikum",
            "Olivenöl"
        ],
        zubereitung: [
            { titel: "Formen", text: "Teig dünn ausrollen oder mit den Händen ziehen." },
            { titel: "Belegen", text: "Mit Tomatensauce bestreichen und Mozzarella darauf verteilen. Weiteren Belag nach belieben hinzufügen." },
            { titel: "Backen", text: "Bei maximaler Hitze (250°C) ca. 10-12 Minuten backen. Danach frisches Basilikum drauf." }
        ]
    },

    "chili": {
        titel: "Chili con Carne",
        bild: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "60 Min.",
        portionen: "4 Portionen",
        kategorie: "Hauptgericht",
        zutaten: [
            "500g Rinderhack",
            "1 Dose Kidneybohnen",
            "1 Dose Mais",
            "400g gehackte Tomaten",
            "Etwas Tomatenmark",
            "1 Zwiebel",
            "Gewürze - Chili, Kreuzkümmel, Pfeffer, Paprika, Knoblauch (nach belieben)",
            "2 Paprika",
            "(Stück Zartbitter Schokolade)"
        ],
        zubereitung: [
            { titel: "Vorbereitung", text: "Zwiebeln und Paprika klein schneiden." },
            { titel: "Anbraten", text: "Hackfleisch anbraten und etwas später die Zwiebeln und Paprika hinzugeben." },
            { titel: "Kochen", text: "Etwas später Tomaten, Bohnen und Mais dazu. Würzen und mind. 45 Min köcheln lassen." },
            { titel: "Servieren", text: "Dazu passt Reis oder Baguette." },
            { titel: "Tipps", text: "Es kann auch gegen Ende etwas Zartbitterschokolade hinzugefügt werden für den Geschmack (Google nach, es stimmt)" }
        ]
    },

};
