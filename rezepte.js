const rezeptDaten = {
    "hamburger": {
        titel: "Hamburger / Cheeseburger",
        bild: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "25 Min.",
        portionen: "2 Burger",
        kategorie: "Hauptgericht",
        autor: "Lars",
        datum: "02.02.2026",
        inspiration: "Klassiker",
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
        autor: "Lars",
        datum: "02.02.2026",
        inspiration: "Italienisches Original",
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
    "nachoauflauf": {
        titel: "Nachoauflauf",
        bild: "Bilder/nachoauflauf.jpg",
        zeit: "Ca. 20 Min.",
        portionen: "2-3 Portionen",
        kategorie: "Hauptgericht",
        autor: "Moritz",
        datum: "21.02.2026",
        inspiration: "Von einer ehemaligen Arbeitskollegin",
        zutaten: [
            "500g Hackfleisch (egal welches)",
            "1 Tüte Nachos",
            "1 Flasche Maggi Texicana",
            "1 Dose Mais (oder 1-2 Paprika)",
            "1 Becher Creme Fraîche",
            "1 Tüte geriebener Käse"
        ],
        zubereitung: [
            { 
                titel: "Vorbereitung", 
                text: "Den Ofen auf 200°C vorheizen. Das Hackfleisch in einem Topf anbraten. Danach die Texicana-Sauce sowie den Mais (oder die gewürfelte Paprika) hinzufügen und alles gut vermischen." 
            },
            { 
                titel: "Schichten", 
                text: "Die Nachos in einer Auflaufform verteilen und das Fleischgemisch gleichmäßig darübergeben. Die Creme Fraîche in Klecksen darauf verteilen (eine komplette Schicht funktioniert auch wunderbar) und anschließend großzügig mit Käse bestreuen – viel hilft hier viel! :D" 
            },
            { 
                titel: "Backen", 
                text: "Das Ganze für 10-15 Minuten in den Ofen schieben, bis der Käse goldbraun geschmolzen ist. Danach direkt servieren und lecker verschnabulieren! :)" 
            },
            { 
                titel: "Tipp", 
                text: "Die Mengenangaben sind nur Standardwerte – man kann hier ganz gut nach Belieben variieren." 
            }
        ]
    },

    "pizza": {
        titel: "Pizza Margherita (Mit fertigem Teig)",
        bild: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        zeit: "40 Min.",
        portionen: "2 Pizzen",
        kategorie: "Hauptgericht, Vegetarisch",
        autor: "Lars",
        datum: "02.02.2026",
        inspiration: "Standard Rezept",
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
        autor: "Lars",
        datum: "02.02.2026",
        inspiration: "Klassiker",
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
        bild: "Bilder/nudelnsusa.jpg",
        zeit: "25 Min.",
        portionen: "2 Portionen",
        kategorie: "Hauptgericht, Schnell",
        autor: "Lars",
        datum: "02.02.2026",
        inspiration: "HelloFresh Inspiration",
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
            { titel: "Servieren", text: "Nun die Nudeln in die Sauce kippen (oder andersherum) und servieren. Guten Appetit!" },
            { titel: "Info zum Bild", text: "Das angegebene Bild nutzt Hackfleisch statt Hähnchengeschnetzeltes und viel zu viele Nudeln. Ist aber dennoch eine gute Alternative." }
        ]
    },

    "sloppy_joe": {
        titel: "Sloppy Joe",
        bild: "Bilder/sloppy_joe.png",
        zeit: "10 Min.",
        portionen: "4 Portionen",
        kategorie: "Hauptgericht, Schnell",
        autor: "Lars",
        datum: "16.02.2026",
        inspiration: "Amerikanischer Klassiker",
        zutaten: [
            "4 Burger Brötchen",
            "500g Rinderhack",
            "1 EL Tomatenmark",
            "250ml Ketchup",
            "1 EL Senf (mittelscharf)",
            "1-2 EL Worcestersauce",
            "Salz & Pfeffer"
        ],
        zubereitung: [
            { titel: "Anbraten", text: "Pfanne heiß machen, Hackfleisch rein und schön krümelig braten. Fett ggf. abgießen. Tomatenmark kurz mit anrösten." },
            { titel: "Die Soße", text: "Ketchup, Senf und Worcestersauce direkt zum Fleisch kippen." },
            { titel: "Blubbern", text: "Alles gut verrühren und bei mittlerer Hitze ca. 5 Minuten köcheln lassen, bis die Soße schön sämig (dickflüssig) ist." },
            { titel: "Finale", text: "Mit Salz und Pfeffer abschmecken. Ab auf die Brötchen damit und genießen!" }
        ]
    },

    "pizzateig": {
        titel: "Pizzateig (Selbstgemacht)",
        bild: "https://images.unsplash.com/photo-1568567663699-3eb161fb40be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        zeit: "50 Min.",
        portionen: "2-3 Pizzen / 1 Blech",
        kategorie: "Vegetarisch, Vegan",
        autor: "Lars",
        datum: "13.02.2026",
        inspiration: "Eigene Kreation",
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
        autor: "Lars",
        datum: "02.02.2026",
        inspiration: "HelloFresh Inspiration",
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
    },

    "mamas_schokokuchen": {
        titel: "Der Schokokuchen Traum",
        bild: "Bilder/schoko_kuchen.jpg",
        zeit: "60 Min.",
        portionen: "1 Kuchen (Springform)",
        kategorie: "Dessert, Vegetarisch",
        autor: "Kerstin G.",
        datum: "18.02.2026",
        inspiration: "<a href='https://www.chefkoch.de/rezepte/2742441426332010/Saftiger-Schokokuchen.html' target='_blank' class='text-orange-600 hover:underline'>Chefkoch.de</a>",
zutaten: [
            "250g Butter (weich)",
            "200g Zucker",
            "4 Eier",
            "2 EL Mehl",
            "1 Pck. Backpulver",
            "3 EL Back-Kakao",
            "125ml Mineralwasser",
            "Für den Guss:",
            "100ml Schlagsahne",
            "100g Zartbitterschokolade"
        ],
        zubereitung: [
            { titel: "Cremig rühren", text: "Butter und Zucker mit dem Mixer schaumig schlagen, bis es hell wird. Dann die Eier nacheinander einzeln unterrühren." },
            { titel: "Trockenes dazu", text: "Mehl, Backpulver und den Back-Kakao mischen und kurz unter den Teig rühren." },
            { titel: "Flüssiges dazu", text: "Das Mineralwasser dazugeben und nur so lange rühren, bis der Teig glatt ist (nicht zu lange, sonst wird er zäh!)." },
            { titel: "Ab in den Ofen", text: "Teig in eine gefettete Springform füllen. Bei 160°C (Ober-/Unterhitze) ca. 30-35 Minuten backen. Stäbchenprobe machen!" },
            { titel: "Der Guss", text: "Während der Kuchen abkühlt: Sahne kurz aufkochen, vom Herd nehmen und die Schokolade darin schmelzen. Den Guss über den abgekühlten Kuchen geben." }
        ]
    }

};
